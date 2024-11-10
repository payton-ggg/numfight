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
          Marathon. As quickly as possible answear for 20 math`s exercise
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(3)}
        >
          Free mode. You have no time and no restrictions only score
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(4)}
        >
          Time is of the essence. You have 60 seconds to solve as many problems
          as possible
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(5)}
        >
          Survival mode. From the beginning you have 10 second, after solving a
          problem you will get extra 2 seconds.
        </div>
        <div
          className="mt-1 hover:cursor-pointer text-center"
          onClick={() => setShow(6)}
        >
          Multiplication. You have only number to multiply.
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
