import React, { useEffect, useState } from "react";

const CookingTip = () => {
  const [tip, setTip] = useState({});
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-topurayhan007.vercel.app/tip")
      .then((res) => res.json())
      .then((data) => setTip(data));
  }, []);

  // console.log(tip);

  return (
    <div className="mt-20">
      <h4 className="md:text-3xl text-2xl md:px-0 px-2 font-extrabold text-center mb-5">
        Cooking Tip
      </h4>
      <div className="flex justify-center mb-4">
        <hr className="border-[2.5px] rounded w-40 border-[#ffc919] flex justify-center text-center" />
      </div>
      <p className="text-center md:text-base text-sm md:px-0 px-2 font-medium text-[#757575] mb-16">
        Get cooking tip every time you visit our site. Try it out, reload the
        site.
      </p>
      <div
        className="hero md:min-h-screen h-[450px]"
        style={{
          backgroundImage: `url("/assets/images/tip-bg.jpg")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <div className="bg-base-300 backdrop-blur-sm bg-white/30 text-white card p-5 h-80 flex justify-center items-center">
              <div>
                <h1 className="mb-5 text-xl md:text-3xl font-bold">
                  {tip.tip}
                </h1>
                <p className="mb-5 font-bold text-base md:text-lg text-[#ffc919]">
                  ~ {tip.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingTip;
