import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import NumericKeyboard from "../components/Keyboard/NumericKeyboard";

const Fold = () => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [operations_log, set_operations_log] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [round, setRound] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateExample = () => {
    const operation = Math.random() < 0.5 ? "+" : "-";
    const num = generateRandomNumber(1, 100);
  
    setNumber((prev) => {
      const newNumber = operation === "+" ? prev + num : prev - num;
      set_operations_log((prev) => [...prev, `${operation} ${num}`]);
      return newNumber;
    });
  };

  const checkAnswer = () => {
    if (parseInt(inputValue) === number) {
      setGameOver(true);
    } else {
      setAttempts(attempts + 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  useEffect(() => {
    if (!isGameOver) {
      generateExample();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((timeIn) => {
        return timeIn + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    // Start Math Blitz: immediate expression counts as round 1, then 9 more rounds every 5s
    generateExample();
    setRound(1);
    const id = setInterval(() => {
      setRound((prev) => {
        if (prev >= 10) {
          clearInterval(id);
          setGameOver(true);
          return prev;
        }
        generateExample();
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center max-md:flex-col gap-8 max-md:gap-0">
          {!isGameOver && (
            <div className="text-center text-4xl">Round: {Math.min(round, 10)} / 10</div>
          )}
          <div className="text-center text-6xl">Your number:</div>
          <div className="text-center text-8xl">{number}</div>
        </div>
        {!isGameOver ? (
          <div className="text-center text-2xl mt-6">A new expression appears every 5 seconds...</div>
        ) : (
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              className="w-full bg-transparent placeholder:text-green-400 text-green-700 text-sm border border-green-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-600 shadow-sm focus:shadow"
              placeholder="Type here..."
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
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
            <div className="text-center text-4xl mt-6">Operations log:</div>
            <div className="text-center text-2xl mt-2">
              {operations_log.join(", ")}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Fold;
