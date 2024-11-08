import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Marathon from "./components/Marathon/MarathonStart";

const App = () => {
  const [show, setShow] = useState(1);
  switch (show) {
    case 2:
      return <Marathon setShow={setShow} />;
    case 3:
      return <Marathon setShow={setShow} />;
    default:
      return <StartScreen setShow={setShow} />;
  }
};

export default App;
