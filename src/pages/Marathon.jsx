import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { PageHeader, StatChip, ExpressionCard, InputPanel } from "../ui/UIKit";

const Marathon = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [time, setTime] = useState(0);
  const [solved, setSolved] = useState(0);
  const [finished, setFinished] = useState(false);

  const generateRandomOperation = () => {
    const operations = ["+", "-", "*"];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateExample = () => {
    const operation = generateRandomOperation();
    const num1 = generateRandomNumber(1, operation === "*" ? 10 : 100);
    const num2 = generateRandomNumber(1, operation === "*" ? 10 : 100);

    setNum1(num1);
    setNum2(num2);
    setOperation(operation);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const correctAnswer = eval(`${num1} ${operation} ${num2}`);

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      const nextSolved = solved + 1;
      setSolved(nextSolved);
      if (nextSolved >= 20) {
        setFinished(true);
        return;
      }
    } else {
      setAttempts(attempts + 1);
    }

    generateExample();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  useEffect(() => {
    generateExample();
  }, []);

  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setTime((timeIn) => timeIn + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [finished]);

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col px-2">
        <PageHeader
          title="Marathon"
          chips={[
            { text: `Solved: ${solved} / 20`, variant: "emerald" },
            { text: `Attempts: ${attempts}`, variant: "orange" },
            { text: `Time: ${time}s`, variant: "indigo" },
          ]}
          progress={solved / 20}
        />
        <ExpressionCard>
          <div className="math-display text-5xl md:text-8xl break-words">
            {num1} {operation} {num2}
          </div>
        </ExpressionCard>
        {!finished && (
          <InputPanel
            value={userAnswer}
            onChange={setUserAnswer}
            onEnter={checkAnswer}
            placeholder="Введите ответ..."
            allowNegative={true}
            buttonLabel="Enter"
          />
        )}
        {finished && (
          <div className="mt-6 text-center">
            <div className="text-2xl md:text-3xl">Finished!</div>
            <div className="text-xl md:text-2xl mt-2">Time: {time}s</div>
            <div className="text-xl md:text-2xl">Attempts: {attempts}</div>
            <button
              className="bg-emerald-400 hover:bg-emerald-600 duration-[400ms] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4"
              onClick={() => {
                setNum1(0);
                setNum2(0);
                setOperation("+");
                setUserAnswer("");
                setScore(0);
                setAttempts(0);
                setTime(0);
                setSolved(0);
                setFinished(false);
                generateExample();
              }}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Marathon;
