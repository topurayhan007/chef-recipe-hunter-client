/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { HiArrowNarrowRight } from "react-icons/hi";

const ChefCard = ({ chef }) => {
  const { name, picture, experience, numOfRecipes, likes } = chef;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-md lg:p-8  p-auto lg:py-auto py-8 lg:px-auto px-5 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
          <div className="avatar">
            <div className="w-44 h-44 rounded-full">
              <img src={picture} alt={`${name}'s Image`} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{name}</h2>
            <p className="font-semibold leading-relaxed text-lg flex items-center gap-2">
              <GiCook className="text-amber-500" /> {experience} of experience
            </p>
            <p className="font-semibold leading-relaxed text-lg flex items-center gap-2">
              <CgNotes className="text-amber-500" /> {numOfRecipes}+ recipes
            </p>
            <div className="flex md:flex-row flex-col gap-5">
              <div className="card-actions md:justify-end">
                <button className="btn btn-ghost border-2 bg-transparent border-black normal-case text-base font-bold">
                  <AiFillHeart className="me-2 text-2xl" /> {likes}
                </button>
              </div>
              <div className="card-actions md:justify-end">
                <button className="btn bg-[#ffc919] border-0 text-black hover:bg-amber-400 normal-case text-base font-bold">
                  View Recipes <HiArrowNarrowRight className="ms-1 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
