import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { PageHeader, ExpressionCard, InputPanel } from "../ui/UIKit";

const Multiplication = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    const correctAnswer = num1 * num2;

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    }

    generateExample();
  };

  const generateExample = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    setNum1(num1);
    setNum2(num2);
    setUserAnswer("");
  };

  useEffect(() => {
    generateExample();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col px-2">
        <PageHeader title="Multiplication" chips={[{ text: `Score: ${score}`, variant: "emerald" }]} />
        <ExpressionCard>
          <div className="math-display text-5xl md:text-8xl break-words">
            {num1} × {num2}
          </div>
        </ExpressionCard>
        <InputPanel
          value={userAnswer}
          onChange={setUserAnswer}
          onEnter={checkAnswer}
          placeholder="Type here..."
        />
      </div>
    </Layout>
  );
};

export default Multiplication;
