import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { PageHeader, ExpressionCard, InputPanel } from "../ui/UIKit";

const FreeMode = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [operation, setOperation] = useState("+");

  const generateExample = () => {
    const operations = ["+", "-", "*"];
    const op = operations[Math.floor(Math.random() * operations.length)];
    const n1 =
      op === "*"
        ? Math.floor(Math.random() * 10) + 1
        : Math.floor(Math.random() * 100) + 1;
    const n2 =
      op === "*"
        ? Math.floor(Math.random() * 10) + 1
        : Math.floor(Math.random() * 100) + 1;

    setNum1(n1);
    setNum2(n2);
    setOperation(op);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const correctAnswer = eval(`${num1} ${operation} ${num2}`);

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
      <div className="flex justify-center items-center flex-col px-2">
        <PageHeader
          title="Free Mode"
          chips={[{ text: `Score: ${score}`, variant: "sky" }]}
        />
        <ExpressionCard variant="gradient">
          <div className="math-display text-5xl md:text-8xl break-words text-slate-900">
            {num1} {operation} {num2}
          </div>
        </ExpressionCard>
        <InputPanel
          value={userAnswer}
          onChange={setUserAnswer}
          onEnter={checkAnswer}
          placeholder="Type here..."
          allowNegative={true}
          color="sky"
          buttonLabel="Enter"
          inputKeyDown={handleKeyDown}
        />
      </div>
    </Layout>
  );
};

export default FreeMode;
