import React from "react";
import { GiFullPizza } from "react-icons/gi";

const ErrorPage = () => {
  return (
    <div className="h-screen relative">
      <div className="-z-50">
        <img
          src="/assets/images/404.jpg"
          className="w-full h-screen object-cover"
          alt=""
        />
      </div>
      <div className="backdrop-blur-sm bg-white/30 absolute h-screen top-0 left-0 right-0 text-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1
            className="md:text-[400px] text-[160px] font-extrabold flex leading-none bg-clip-text text-transparent bg-gradient-to-b from-slate-200"
            style={{
              "-webkit-text-stroke": "0.5px white",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            4 <GiFullPizza className="text-amber-400" /> 4
          </h1>
          <h3 className="md:text-4xl py-2 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-blue-50 leading-normal">
            Page not Found!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
