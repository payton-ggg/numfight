// eslint-disable-next-line react/prop-types
const StartScreen = ({ setShow }) => {
  return (
    <div className="bg-[#faebd9] flex flex-col items-center mt-[5%] mx-[20%] max-md:mx-[8%] max-md:mt-[10%] rounded-xl shadow-xl h-[80vh]">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-1 mt-2 ml-2">
          <div className="h-4 w-4 border-fancy-1 bg-[#fea699] border-2 border-black" />
          <div className="h-4 w-4 border-fancy-2 bg-[#ffae9d] border-2 border-black" />
          <div className="h-4 w-4 border-fancy-3 bg-[#807b82] border-2 border-black" />
        </div>
      </div>
      <div>
        <div className="text-6xl text-center text-slate-700">NUMFIGHT</div>
        <div
          className="mt-6 hover:cursor-pointer text-center"
          onClick={() => setShow(2)}
        >
          Marathon 🏃. Answer 20 math exercises as quickly as possible. Test
          your speed and accuracy!
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(3)}
        >
          Free mode 🔓. No time limits, no restrictions — just focus on solving
          problems and accumulating a high score
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(4)}
        >
          Time is of the essence ⏰. You have 60 seconds to solve as many
          problems as possible. The clock is ticking!
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(5)}
        >
          Survival mode 🛡️. Start with 10 seconds on the clock. For every
          correct answer, earn an extra 2 seconds. How long can you last?
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(6)}
        >
          Multiplication ✖️. Only multiplication problems. Perfect for
          practicing your times tables!
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(7)}
        >
          Math Blitz ⚡. Every 5 seconds, a new expression appears. After 10
          rounds, input the final answer to win!
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
