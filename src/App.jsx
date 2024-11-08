import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Marathon from "./components/Marathon/Marathon";
import FreeMode from "./components/FreeMode/FreeMode";

const App = () => {
  const [show, setShow] = useState(1);
  switch (show) {
    case 2:
      return <Marathon setShow={setShow} />;
    case 3:
      return <FreeMode setShow={setShow} />;
    default:
      return <StartScreen setShow={setShow} />;
  }
};

export default App;
