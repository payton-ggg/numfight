import { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import Marathon from "./components/Marathon/Marathon";
import FreeMode from "./components/FreeMode/FreeMode";
import Timeless from "./components/Timeless/Timeless";
import ExtraTime from "./components/ExtraTime/ExtraTime";
import Multiplication from "./components/Multiplication/Multiplication";
import Fold from "./components/Fold/Fold";

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

  const [show, setShow] = useState(1);

  switch (show) {
    case 2:
      return <Marathon setShow={setShow} />;
    case 3:
      return <FreeMode setShow={setShow} />;
    case 4:
      return <Timeless setShow={setShow} />;
    case 5:
      return <ExtraTime setShow={setShow} />;
    case 6:
      return <Multiplication setShow={setShow} />;
    case 7:
      return <Fold setShow={setShow} />;
    default:
      return <StartScreen setShow={setShow} />;
  }
};

export default App;
