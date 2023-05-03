/* eslint-disable react/prop-types */
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const RecipeCard = ({ recipe }) => {
  const { name, ingredients, cooking_method } = recipe;
  const methodsArray = [];
  cooking_method
    .split(/[.!?]\s+/)
    .map((method) => method.trim())
    .forEach((method) => {
      methodsArray.push(method);
    });
  console.log(methodsArray, cooking_method);
  const methods = methodsArray.map((method, index) => {
    if (index === methodsArray.length - 1) {
      return method;
    } else {
      return method + ".";
    }
  });

  return (
    <div className="mt-10">
      <div className="grid md:grid-cols-4 card bg-[#f0f2ee] shadow-lg gap-5 px-8 py-12">
        <div className="col-span-1 px-2">
          <h3 className="text-xl font-bold mb-4 text-center">Ingredients</h3>
          {ingredients.map((item) => (
            <p
              key={item.index}
              className="my-2 bg-[#33313c] text-base-200 rounded-xl ps-5 pe-2 py-1 text-base font-medium"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="col-span-2 ">
          <div className="card bg-base-100 shadow-md lg:p-4 p-auto lg:py-auto py-8 lg:px-auto px-5 ">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
              <div className="avatar flex-1 flex justify-center">
                <div className="w-48 h-48 rounded-full">
                  <LazyLoad height={200} offset={10}>
                    <img src={""} alt={`${name}'s Image`} />
                  </LazyLoad>
                </div>
              </div>
              <div className="card-body flex-1 px-4">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <div className="flex flex-col gap-5 mt-3">
                  <div className="card-actions md:justify-start">
                    <Link to={`/chef-recipes/${""}`}>
                      <button className="btn bg-[#ffc919] border-0 text-black hover:bg-amber-400 normal-case text-base font-bold">
                        Ratings
                      </button>
                    </Link>
                  </div>
                  <div className="card-actions md:justify-start">
                    <button className="btn  bg-[#ffc919] border-0 text-black hover:bg-amber-400 normal-case text-base font-bold">
                      <AiFillHeart className="me-2 text-2xl" /> Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 ps-4 pe-2">
          <h3 className="text-xl font-bold mb-4 text-center">Cooking Method</h3>
          {methods.map((method, index) => (
            <p
              className="text-base font-medium my-2 bg-[#33313c] text-base-200 px-3 rounded-xl py-1"
              key={index}
            >
              {method}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
