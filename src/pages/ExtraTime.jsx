import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { PageHeader, ExpressionCard, InputPanel } from "../ui/UIKit";

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
    const correctAnswer =
      operation === "+"
        ? num1 + num2
        : operation === "-"
        ? num1 - num2
        : num1 * num2;

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
      <div className="flex justify-center items-center flex-col px-2">
        <PageHeader
          title="Extra Time"
          chips={[
            { text: `Score: ${score}`, variant: "emerald" },
            { text: `Mistakes: ${mistakes}`, variant: "orange" },
            { text: `Time: ${timeLeft}`, variant: "indigo" },
          ]}
        />
        <ExpressionCard>
          <div className="math-display text-5xl md:text-8xl break-words">
            {num1} {operation} {num2}
          </div>
        </ExpressionCard>
        <InputPanel
          value={userAnswer}
          onChange={setUserAnswer}
          onEnter={checkAnswer}
          placeholder="Type here..."
          allowNegative={true}
          buttonLabel="Enter"
          inputKeyDown={(e) => e.key === "Enter" && checkAnswer()}
        />
      </div>
    </Layout>
  );
};

export default ExtraTime;
