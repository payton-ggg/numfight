import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import Marathon from "./pages/Marathon";
import FreeMode from "./pages/FreeMode";
import Timeless from "./pages/Timeless";
import ExtraTime from "./pages/ExtraTime";
import Multiplication from "./pages/Multiplication";
import Fold from "./pages/Fold";
import Quadratic from "./pages/Quadratic";

const App = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Это необходимо для работы в некоторых браузерах
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/marathon" element={<Marathon />} />
      <Route path="/free" element={<FreeMode />} />
      <Route path="/timeless" element={<Timeless />} />
      <Route path="/extra-time" element={<ExtraTime />} />
      <Route path="/multiplication" element={<Multiplication />} />
      <Route path="/fold" element={<Fold />} />
      <Route path="/quadratic" element={<Quadratic />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
