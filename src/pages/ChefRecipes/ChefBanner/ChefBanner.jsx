import React from "react";
import LazyLoad from "react-lazy-load";
import { useLoaderData } from "react-router-dom";
import { GiCampCookingPot } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const ChefBanner = () => {
  const chef = useLoaderData();
  // console.log(chef);
  const { name, picture, bio, experience, likes, numOfRecipes } = chef;

  return (
    <div className="flex md:flex-row flex-col justify-between items-center md:h-[400px] lg:h-[650px]">
      <div className="flex-1 order-1">
        <div className="md:ps-10 ps-5">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-extrabold mb-6">
            {name}
          </h1>
          <hr className="border-[2.5px] rounded w-56  mb-8 border-[#ffc919] flex justify-center text-center" />

          <h5 className="font-semibold text-lg md:pe-20 leading-relaxed">
            {bio}
          </h5>
          <div className="bg-base-300 w-11/12 md:w-1/2 md:py-5 py-3 rounded-full border-2 ms-4 border-black px-10 flex items-center relative mt-5">
            <div className="absolute -left-5 rounded-full bg-[#ffc919] w-12 h-12">
              <div className="w-12 h-12 items-center flex justify-center">
                <GiCampCookingPot className="text-xl" />
              </div>
            </div>
            <p className="text-lg font-bold tracking-wide">
              <span className="text-xl">{experience}</span> of experience
            </p>
          </div>
          <div className="bg-base-300 w-11/12 md:w-1/2 md:py-5 py-3 rounded-full border-2 ms-4 border-black px-10 flex items-center relative mt-4">
            <div className="absolute -left-5 rounded-full bg-[#ffc919] w-12 h-12">
              <div className="w-12 h-12 items-center flex justify-center">
                <FaBook className="text-xl" />
              </div>
            </div>
            <p className="text-lg font-bold tracking-wide">
              <span className="text-xl">{numOfRecipes}</span> + recipes
            </p>
          </div>

          <div className="bg-base-300 w-11/12 md:w-1/2 md:py-5 py-3 rounded-full border-2 ms-4 border-black px-10 flex items-center relative mt-4">
            <div className="absolute -left-5 rounded-full bg-[#ffc919] w-12 h-12">
              <div className="w-12 h-12 items-center flex justify-center">
                <AiFillHeart className="text-xl" />
              </div>
            </div>
            <p className="text-lg font-bold tracking-wide">
              <span className="text-xl">{likes}</span> likes
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex-1 overflow-hidden order-0 md:order-1 h-[300px] md:h-[400px] lg:h-[650px] w-full"
        style={{ borderRadius: "25% 0 0 60%" }}
      >
        <LazyLoad height={`100%`} offset={100} threshold={0.95}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className=""
            src={picture}
            alt=""
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default ChefBanner;
