import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#faebd9] flex flex-col items-stretch md:items-center mx-[8%] my-[5%] md:mx-[20%] md:mt-[5%] rounded-xl shadow-xl md:min-h-[80vh] px-4 py-4 overflow-y-auto">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-1 mt-1 ml-1">
          <div className="h-4 w-4 border-fancy-1 bg-[#fea699] border-2 border-black" />
          <div className="h-4 w-4 border-fancy-2 bg-[#ffae9d] border-2 border-black" />
          <div className="h-4 w-4 border-fancy-3 bg-[#807b82] border-2 border-black" />
        </div>
      </div>
      <div className="w-full">
        <Link
          className="text-4xl md:text-6xl text-center text-slate-700 hover:cursor-pointer block"
          to="/"
        >
          NumFight
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Layout;
