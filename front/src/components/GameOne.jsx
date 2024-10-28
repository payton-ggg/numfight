/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const GameOne = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomOperation = () => {
    const operations = ["+", "-", "*"];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  };

  const generateExample = () => {
    const operation = generateRandomOperation();
    const num1 = generateRandomNumber(1, operation === "*" ? 10 : 100);
    const num2 = generateRandomNumber(1, operation === "*" ? 10 : 100);

    setNum1(num1);
    setNum2(num2);
    setOperation(operation);
    setUserAnswer("");
    setMessage("");
  };

  const checkAnswer = () => {
    let correctAnswer = eval(`${num1} ${operation} ${num2}`);
    console.log(correctAnswer);

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setMessage("Правильно!");
    } else {
      setMessage(`Неправильно! Правильный ответ: ${correctAnswer}`);
    }

    // Генерация нового примера после проверки
    generateExample();
  };

  useEffect(() => {
    generateExample();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-center text-5xl">Score {score}</div>
      <div className="text-center text-8xl">
        {num1} {operation} {num2}
      </div>
      <div>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      </div>
      <button
        className="bg-green-400 hover:bg-green-600 duration-[400ms] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={checkAnswer}
      >
        Enter
      </button>
    </div>
  );
};

export default GameOne;
