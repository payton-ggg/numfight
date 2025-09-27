import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import NumericKeyboard from "../components/Keyboard/NumericKeyboard";

const FreeMode = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateExample = () => {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);

    setNum1(num1);
    setNum2(num2);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const correctAnswer = num1 + num2;

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
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

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center max-md:flex-col">
          <div className="text-center text-4xl">Score: {score}</div>
          <div className="text-center text-8xl">
            {num1} + {num2}
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
        <NumericKeyboard value={userAnswer} onChange={setUserAnswer} onEnter={checkAnswer} />
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

export default FreeMode;
