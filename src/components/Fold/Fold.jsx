/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Layout from "../../Layout";
import { motion } from "framer-motion";
import NumericKeyboard from "../Keyboard/NumericKeyboard";

// eslint-disable-next-line react/prop-types
const Fold = ({ setShow }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [operation, setOperation] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [timer, setTimer] = useState(null);

  const generateExample = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const randomOp = Math.random() < 0.5 ? "+" : "-";
    return { randomNum, randomOp };
  };

  const calculateResult = (num, op) => {
    return op === "+" ? currentNumber + num : currentNumber - num;
  };

  useEffect(() => {
    if (step >= 10) {
      clearInterval(timer);
      setIsGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      const { randomNum, randomOp } = generateExample();
      setOperation(randomOp);
      setNewNumber(randomNum);
      const newResult = calculateResult(randomNum, randomOp);
      setCurrentNumber(newResult);
      setStep((prevStep) => prevStep + 1);
      console.log(newResult);
    }, 5000);
    setTimer(interval);

    return () => clearInterval(interval);
  }, [step]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  // Функция для проверки ответа пользователя
  const checkAnswer = () => {
    const userAnswer = parseInt(inputValue);
    if (userAnswer === currentNumber) {
      alert("Congratulation! Correct answear!");
    } else {
      alert(`Incorrect! The right was ${currentNumber}`);
    }
    setShow(1);
  };

  return (
    <Layout setShow={setShow}>
      <div className="flex justify-center items-center flex-col">
        {!isGameOver ? (
          <div className="flex flex-col items-center max-md:flex-col">
            <div className="text-center text-4xl">Step left: {10 - step}</div>
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="text-center text-8xl"
            >
              {operation} {newNumber}
            </motion.div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center max-md:flex-col">
              <div className="text-center text-4xl">Step left: {10 - step}</div>
              <div className="text-center text-8xl">
                {operation} {newNumber}
              </div>
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <input
                className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-600 shadow-sm focus:shadow"
                placeholder="Type here..."
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <NumericKeyboard
              value={inputValue}
              onChange={setInputValue}
              onEnter={checkAnswer}
              allowNegative={true}
            />
            <button
              className="bg-green-400 hover:bg-green-600 duration-[400ms] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-3"
              onClick={checkAnswer}
            >
              Enter
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Fold;
