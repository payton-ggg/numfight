import { useState, useEffect } from "react";
import Layout from "../../Layout";
import NumericKeyboard from "../Keyboard/NumericKeyboard";

// Режим решения квадратных уравнений ax^2 + bx + c = 0,
// где уравнение гарантированно имеет целые корни
const Quadratic = ({ setShow }) => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [root1, setRoot1] = useState(0);
  const [root2, setRoot2] = useState(0);

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [activeInput, setActiveInput] = useState(1); // 1 или 2
  const [score, setScore] = useState(0);
  // Добавляем режим выбора коэффициента a: "monic" (a = 1) или "positive" (a ≥ 1)
  const [aMode, setAMode] = useState("positive");

  const randInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const generateEquation = () => {
    // Генерируем целочисленные корни r1 и r2 (включая повторяющиеся корни)
    let r1 = randInt(-9, 9);
    let r2 = randInt(-9, 9);
    // Разрешаем 0 и равные корни; главное, что a != 0
    let aLocal = aMode === "monic" ? 1 : randInt(1, 5); // a = 1 или a ≥ 1

    // Формируем коэффициенты из корней: a(x - r1)(x - r2) = ax^2 - a(r1+r2)x + a*r1*r2
    const bLocal = -aLocal * (r1 + r2);
    const cLocal = aLocal * r1 * r2;

    // Сохраняем
    setA(aLocal);
    setB(bLocal);
    setC(cLocal);
    setRoot1(r1);
    setRoot2(r2);
    setAnswer1("");
    setAnswer2("");
    setActiveInput(1);
  };

  useEffect(() => {
    // При смене режима a пересоздаем уравнение
    generateEquation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aMode]);

  const formatTerm = (coef, power) => {
    if (coef === 0) return "";
    const sign = coef > 0 ? "+" : "-";
    const abs = Math.abs(coef);
    if (power === 2) {
      if (abs === 1) return `${sign} x^2`;
      return `${sign} ${abs}x^2`;
    } else if (power === 1) {
      if (abs === 1) return `${sign} x`;
      return `${sign} ${abs}x`;
    }
    return `${sign} ${abs}`;
  };

  const renderEquation = () => {
    // a всегда != 0, поэтому первый член без знака у первого полож.
    const aStr = a === 1 ? "x²" : a === -1 ? "-x²" : `${a}x²`;
    const bStr = formatTerm(b, 1);
    const cStr = formatTerm(c, 0);
    return `${aStr} ${bStr ? bStr : ""} ${cStr ? cStr : ""} = 0`;
  };

  const checkAnswer = () => {
    const v1 = parseInt(answer1, 10);
    const v2 = parseInt(answer2, 10);
    if (Number.isNaN(v1) || Number.isNaN(v2)) return;

    const ok = (v1 === root1 && v2 === root2) || (v1 === root2 && v2 === root1);
    if (ok) {
      setScore((s) => s + 1);
      alert("Правильно! Продолжаем.");
    } else {
      alert(`Неверно. Правильные корни: x1=${root1}, x2=${root2}`);
    }
    generateEquation();
  };

  const handleKeyboardChange = (val) => {
    if (activeInput === 1) setAnswer1(val);
    else setAnswer2(val);
  };

  return (
    <Layout setShow={setShow}>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center max-md:flex-col gap-1 max-md:gap-0">
          <div className="text-center text-5xl">Score: {score}</div>
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              className={`px-3 py-1 rounded font-semibold ${
                aMode === "monic"
                  ? "bg-green-400 hover:bg-green-600 text-gray-800"
                  : "bg-zinc-200 hover:bg-zinc-300 text-gray-800"
              }`}
              onClick={() => setAMode("monic")}
            >
              a = 1
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded font-semibold ${
                aMode === "positive"
                  ? "bg-green-400 hover:bg-green-600 text-gray-800"
                  : "bg-zinc-200 hover:bg-zinc-300 text-gray-800"
              }`}
              onClick={() => setAMode("positive")}
            >
              a ≥ 1
            </button>
          </div>
          <div className="text-center text-5xl mt-1">{renderEquation()}</div>
        </div>

        <div className="flex gap-2 w-full max-w-sm min-w-[200px] mt-4">
          <input
            className={`w-1/2 bg-transparent placeholder:text-green-400 text-green-700 text-sm border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow ${
              activeInput === 1 ? "border-green-600" : "border-green-400"
            }`}
            placeholder="x₁"
            type="number"
            value={answer1}
            onFocus={() => setActiveInput(1)}
            onChange={(e) => setAnswer1(e.target.value)}
          />
          <input
            className={`w-1/2 bg-transparent placeholder:text-green-400 text-green-700 text-sm border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow ${
              activeInput === 2 ? "border-green-600" : "border-green-400"
            }`}
            placeholder="x₂"
            type="number"
            value={answer2}
            onFocus={() => setActiveInput(2)}
            onChange={(e) => setAnswer2(e.target.value)}
          />
        </div>

        <NumericKeyboard
          value={activeInput === 1 ? answer1 : answer2}
          onChange={handleKeyboardChange}
          onEnter={checkAnswer}
          allowNegative={true}
        />

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
