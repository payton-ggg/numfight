import { useEffect, useMemo, useState } from "react";
import Layout from "../layouts/Layout";
import NumericKeyboard from "../components/Keyboard/NumericKeyboard";

const Quadratic = () => {
  const [aMode, setAMode] = useState("monic"); // 'monic' => a=1, 'positive' => a>=1
  const [state, setState] = useState({ a: 1, b: 0, c: 0, r1: 0, r2: 0 });
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const formatTerm = (coef, variable) => {
    if (coef === 0) return "";
    const sign = coef > 0 ? "+" : "-";
    const absCoef = Math.abs(coef);
    const coefStr = absCoef === 1 && variable ? "" : absCoef;
    return ` ${sign} ${coefStr}${variable ?? ""}`;
  };

  const generateEquation = () => {
    // roots as integers
    const r1 = randomInt(-9, 9);
    let r2 = randomInt(-9, 9);
    // ensure distinct roots sometimes; allow equal roots too
    if (Math.random() < 0.3) r2 = r1;

    const a = aMode === "monic" ? 1 : randomInt(1, 5);
    const b = -a * (r1 + r2);
    const c = a * r1 * r2;
    setState({ a, b, c, r1, r2 });
    setAns1("");
    setAns2("");
  };

  useEffect(() => {
    generateEquation();
  }, []);

  useEffect(() => {
    generateEquation();
  }, [aMode]);

  const equationStr = useMemo(() => {
    const { a, b, c } = state;
    const aStr = a === 1 ? "x^2" : `${a}x^2`;
    const bStr = formatTerm(b, "x");
    const cStr = formatTerm(c);
    return `${aStr}${bStr}${cStr} = 0`;
  }, [state]);

  const checkAnswer = () => {
    const userR1 = parseInt(ans1);
    const userR2 = parseInt(ans2);
    if (
      (userR1 === state.r1 && userR2 === state.r2) ||
      (userR1 === state.r2 && userR2 === state.r1)
    ) {
      generateEquation();
    } else {
      // shake or feedback could be added
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-6">
        <div className="text-center text-6xl">Quadratic Equations</div>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded ${
              aMode === "monic" ? "bg-green-500" : "bg-gray-500"
            }`}
            onClick={() => setAMode("monic")}
          >
            a = 1
          </button>
          <button
            className={`px-3 py-1 rounded ${
              aMode === "positive" ? "bg-green-500" : "bg-gray-500"
            }`}
            onClick={() => setAMode("positive")}
          >
            a ≥ 1
          </button>
        </div>
        <div className="text-center text-5xl mt-4">{equationStr}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full max-w-lg">
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-600 shadow-sm focus:shadow"
              placeholder="Root x1"
              type="number"
              value={ans1}
              onChange={(e) => setAns1(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            />
            <NumericKeyboard
              value={ans1}
              onChange={setAns1}
              onEnter={checkAnswer}
              allowNegative={true}
            />
          </div>

          <div className="w-full max-w-sm min-w-[200px]">
            <input
              className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-600 shadow-sm focus:shadow"
              placeholder="Root x2"
              type="number"
              value={ans2}
              onChange={(e) => setAns2(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            />
            <NumericKeyboard
              value={ans2}
              onChange={setAns2}
              onEnter={checkAnswer}
              allowNegative={true}
            />
          </div>
        </div>

        <button
          className="bg-green-400 hover:bg-green-600 duration-[400ms] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-3"
          onClick={checkAnswer}
        >
          Enter
        </button>
      </div>
    </Layout>
  );
};

export default Quadratic;
