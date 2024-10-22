import PropTypes from "prop-types";
import { useState } from "react";
import GameOne from "./GameOne";

const Marathon = ({ setShow }) => {
  const [shown, setShown] = useState(false);

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
        <div
          className="text-6xl text-center text-slate-700 hover:cursor-pointer"
          onClick={() => setShow(true)}
        >
          NUMFIGHT
        </div>
        {shown ? (
          <div className="mt-14 text-center text-4xl border border-blue-400 py-3 rounded-[36px] btn shadow-xl">
            START
          </div>
        ) : (
          <GameOne setShown={setShown} />
        )}
      </div>
    </div>
  );
};

Marathon.propTypes = {
  setShow: PropTypes.string.isRequired,
};

export default Marathon;
