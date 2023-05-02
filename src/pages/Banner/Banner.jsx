/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero h-[400px] md:h-[750px] w-full"
            style={{
              backgroundImage: `url("assets/banner/banner-1.jpg")`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-[42rem]">
                <h1 className="lg:text-7xl md:text-[43px] text-5xl  font-extrabold leading-tight">
                  Discover the <br />
                  Art of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fda085] to-yellow-500">
                    Fine Cooking
                  </span>
                </h1>
                <p className=" text-base font-medium leading-relaxed py-6">
                  Enjoy a sensory feast of delicious flavors,
                  <br /> aromas, and textures with our mouth-watering <br />
                  recipes by the world's top chefs.
                </p>
                <button className="text-base text-black font-bold bg-gradient-to-r from-[#ffc919] to-yellow-500 rounded-lg px-6 py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero h-[400px] md:h-[750px] w-full"
            style={{
              backgroundImage: `url("assets/banner/banner-2.jpg")`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-[42rem]">
                <h1 className="lg:text-7xl md:text-[43px] text-5xl  font-extrabold leading-tight">
                  Discover the <br />
                  Art of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fda085] to-yellow-500">
                    Fine Cooking
                  </span>
                </h1>
                <p className=" text-base font-medium leading-relaxed py-6">
                  Enjoy a sensory feast of delicious flavors,
                  <br /> aromas, and textures with our mouth-watering <br />
                  recipes by the world's top chefs.
                </p>
                <button className="text-base text-black font-bold bg-gradient-to-r from-[#ffc919] to-yellow-500 rounded-lg px-6 py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero h-[400px] md:h-[750px] w-full"
            style={{
              backgroundImage: `url("assets/banner/banner-3.jpg")`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-[42rem]">
                <h1 className="lg:text-7xl md:text-[43px] text-5xl  font-extrabold leading-tight">
                  Discover the <br />
                  Art of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fda085] to-yellow-500">
                    Fine Cooking
                  </span>
                </h1>
                <p className=" text-base font-medium leading-relaxed py-6">
                  Enjoy a sensory feast of delicious flavors,
                  <br /> aromas, and textures with our mouth-watering <br />
                  recipes by the world's top chefs.
                </p>
                <button className="text-base text-black font-bold bg-gradient-to-r from-[#ffc919] to-yellow-500 rounded-lg px-6 py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
