import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import NumericKeyboard from "../components/Keyboard/NumericKeyboard";

const ExtraTime = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

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
    if (timeLeft <= 0) return;
    const correctAnswer = num1 * num2;

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setTimeLeft((prev) => prev + 2);
    } else {
      setMistakes(mistakes + 1);
    }

    generateExample();
  };

  useEffect(() => {
    generateExample();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center max-md:flex-col gap-7">
          <div className="text-center text-4xl">Score: {score}</div>
          <div className="text-center text-4xl">Mistakes: {mistakes}</div>
          <div className="text-center text-4xl">Time: {timeLeft}</div>
          <div className="text-center text-8xl">
            {num1} {operation} {num2}
          </div>
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <input
            className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-600 shadow-sm focus:shadow"
            placeholder="Type here..."
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <NumericKeyboard
          value={userAnswer}
          onChange={setUserAnswer}
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

export default ExtraTime;
