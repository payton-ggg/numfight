/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Layout from "../../Layout";
import NumericKeyboard from "../Keyboard/NumericKeyboard";

const Marathon = ({ setShow }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [time, setTime] = useState(0);

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
  };

  const checkAnswer = () => {
    let correctAnswer = eval(`${num1} ${operation} ${num2}`);
    console.log(correctAnswer);
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    }

    setAttempts(attempts + 1);
    if (attempts === 20) {
      alert(
        `After 20 problem your score is ${score}. And your time is ${time} seconds`
      );
      setShow(1);
    }

    // Генерация нового примера после проверки
    console.log(attempts);
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
    const timer = setInterval(() => {
      setTime((timeIn) => {
        return timeIn + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <Layout setShow={setShow}>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center max-md:flex-col">
          <div className="text-center text-4xl">Score: {score}</div>
          <div className="text-center text-4xl">Attempts: {attempts}</div>
          <div className="text-center text-4xl">Time: {time}</div>
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

export default Marathon;
