import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Marathon from "./components/MarathonStart";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <StartScreen setShow={setShow} />
      ) : (
        <Marathon setShow={setShow} />
      )}
    </>
  );
};

export default App;
