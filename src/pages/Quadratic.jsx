import { useEffect, useMemo, useState } from "react";
import Layout from "../layouts/Layout";
import { PageHeader, ExpressionCard, InputPanel } from "../ui/UIKit";
import Message from "../ui/Message";

const Quadratic = () => {
  const [aMode, setAMode] = useState("monic"); // 'monic' => a=1, 'positive' => a>=1
  const [state, setState] = useState({ a: 1, b: 0, c: 0, r1: 0, r2: 0 });
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [showMessage, setShowMessage] = useState(false);

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
    const aStr = a === 1 ? "x²" : `${a}x²`;
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
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <Layout>
      <Message text="Incorrect answer" show={showMessage} />

      <div className="flex justify-center items-center flex-col px-2">
        <PageHeader title="Quadratic" />
        <div className="flex space-x-4 mb-4 mt-5">
          <button
            onClick={() => setAMode("monic")}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              aMode === "monic"
                ? "bg-slate-400 hover:bg-slate-500 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            Monic (a = 1)
          </button>
          <button
            onClick={() => setAMode("positive")}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              aMode === "positive"
                ? "bg-slate-400 hover:bg-slate-500 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            Positive (a ≥ 1)
          </button>
        </div>
        <ExpressionCard>
          <div className="math-display text-2xl md:text-3xl break-words">
            Solve: {equationStr}
          </div>
        </ExpressionCard>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <InputPanel
            value={ans1}
            onChange={setAns1}
            onEnter={checkAnswer}
            placeholder="Root x1"
            allowNegative={true}
          />
          <InputPanel
            value={ans2}
            onChange={setAns2}
            onEnter={checkAnswer}
            placeholder="Root x2"
            allowNegative={true}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Quadratic;
