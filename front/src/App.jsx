import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Marathon from "./components/Marathon";

const App = () => {
  const [show, setShow] = useState(true);

  return <>{show ? <StartScreen setShow={setShow} /> : <Marathon />}</>;
};

export default App;
