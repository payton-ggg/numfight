// eslint-disable-next-line react/prop-types
const Layout = ({ children, setShow }) => {
  return (
    <div className="bg-[#faebd9] flex flex-col items-center mt-[5%] mx-[20%] max-md:mx-[8%] max-md:mt-[10%] rounded-xl shadow-xl h-[80vh]">
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
          onClick={() => setShow(1)}
        >
          MathQuest
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
