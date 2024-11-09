import { useEffect, useState } from "react";
import Layout from "../../Layout";

// eslint-disable-next-line react/prop-types
const Timeless = ({ setShow }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

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

    // Генерация нового примера после проверки
    generateExample();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  useEffect(() => {
    generateExample();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time === 0) {
          clearInterval(time);
          return 0;
        } else {
          return time - 1;
        }
      });
    }, 1000);

    if (timeLeft === 0) {
      alert(`Time is over. Your score is ${score}`);
      setShow(1);
    }

    return () => clearInterval(timer);
  }, [score, setShow, timeLeft]);

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      alert('Вы нажали кнопку "Назад"!');
    };

    window.addEventListener("popstate", handleBackButton);

    setShow(1);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [setShow]);

  return (
    <Layout setShow={setShow}>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center max-md:flex-col gap-1 max-md:gap-0">
          <div className="text-center text-5xl">Score: {score}</div>
          <div className="text-center text-5xl">Time left: {timeLeft}</div>
          <div className="text-center text-8xl">
            {num1} {operation} {num2}
          </div>
        </div>
        <div className="w-full max-w-sm min-w-[200px] mt-2">
          <input
            className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-600 shadow-sm focus:shadow"
            placeholder="Type here..."
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
          />
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

export default Timeless;
