import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GameOne = () => {
  const [task, setTask] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Функция для выбора случайного арифметического оператора
  const generateRandomOperation = () => {
    const operations = ["+", "-", "*"];
    // Выбираем случайный оператор из массива
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  };
  useEffect(() => {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const operation = generateRandomOperation();

    let startTask = `${num1} ${operation} ${num2}`;

    setTask(startTask);

    console.log(`${num1} ${operation} ${num2}`, eval(startTask));
  }, [setTask]);

  return (
    <>
      <div className="text-center text-8xl">{task}</div>
      <div className="flex">
        <div>Score</div>
      </div>
    </>
  );
};

export default GameOne;
