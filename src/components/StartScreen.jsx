import PropTypes from "prop-types";

const StartScreen = ({ setShow }) => {
  return (
    <div className="bg-[#faebd9] flex flex-col items-center mt-[7%] mx-[20%] max-md:mx-[8%] rounded-xl shadow-xl h-[70vh]">
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
          className="mt-4 hover:cursor-pointer max-md:text-center"
          onClick={() => setShow(false)}
        >
          Marathon. As quickly as possible answear for 20 math`s exercise
        </div>
      </div>
    </div>
  );
};

export default StartScreen;