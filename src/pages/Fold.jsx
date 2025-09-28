import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { PageHeader, ExpressionCard, InputPanel } from "../ui/UIKit";

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
    // Автоматически выполняем 10 операций: каждые 5 секунд
    set_operations_log([]);
    setNumber(0);
    setRound(0);
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
    // первая операция сразу
    generateExample();
    setRound(1);
    return () => clearInterval(id);
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col px-2">
        <PageHeader
          title="Math Blitz"
          chips={[
            { text: `Round: ${Math.min(round, 10)} / 10`, variant: "indigo" },
          ]}
        />
        <ExpressionCard>
          <div className="text-2xl md:text-3xl">Your number:</div>
          <div className="math-display text-5xl md:text-8xl">{number}</div>
        </ExpressionCard>
        {!isGameOver ? (
          <div className="text-center text-2xl mt-6">
            A new expression appears every 5 seconds...
          </div>
        ) : (
          <>
            <InputPanel
              value={inputValue}
              onChange={setInputValue}
              onEnter={checkAnswer}
              placeholder="Type here..."
              allowNegative={true}
            />
            <div className="text-center text-4xl mt-6">Operations log:</div>
            <div className="text-center text-2xl mt-2 break-words px-2">
              {operations_log.join(", ")}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Fold;
