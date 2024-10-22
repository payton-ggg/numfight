import PropTypes from "prop-types";

const StartScreen = ({ setShow }) => {
  return (
    <div className="bg-[#faebd9] flex flex-col items-center mt-[10%] mx-[20%] rounded-xl shadow-xl h-[50vh]">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-1 mt-2 ml-2">
          <div className="h-4 w-4 border-fancy-1 bg-[#fea699] border-2 border-black" />
          <div className="h-4 w-4 border-fancy-2 bg-[#ffae9d] border-2 border-black" />
          <div className="h-4 w-4 border-fancy-3 bg-[#807b82] border-2 border-black" />
        </div>
      </div>
      <div className="">
        <div className="text-5xl text-center text-slate-700">NUMFIGHT</div>
        <div className="mt-4 pointer" onClick={setShow(false)}>
          Marathon. As quickly as possible answear for 20 math`s exercise
        </div>
      </div>
    </div>
  );
};

StartScreen.propTypes = {
  setShow: PropTypes.string.isRequired,
};

export default StartScreen;
