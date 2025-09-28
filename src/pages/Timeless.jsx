import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { PageHeader, ExpressionCard, InputPanel } from "../ui/UIKit";

const Timeless = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  const generateExample = () => {
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    setNum1(num1);
    setNum2(num2);
    setOperation(operation);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    let correctAnswer = eval(`${num1} ${operation} ${num2}`);

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
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

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col px-2">
        <PageHeader
          title="Timeless"
          chips={[
            { text: `Score: ${score}`, variant: "emerald" },
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
          inputKeyDown={(e) => e.key === "Enter" && checkAnswer()}
        />
      </div>
    </Layout>
  );
};

export default Timeless;
