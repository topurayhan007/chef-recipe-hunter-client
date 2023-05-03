/* eslint-disable react/prop-types */
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Rating from "react-rating";

const RecipeCard = ({ recipe }) => {
  const { name, picture, ingredients, cooking_method, rating } = recipe;
  const methodsArray = [];
  cooking_method
    .split(/[.!?]\s+/)
    .map((method) => method.trim())
    .forEach((method) => {
      methodsArray.push(method);
    });
  // console.log(methodsArray, cooking_method);

  const methods = methodsArray.map((method, index) => {
    if (index === methodsArray.length - 1) {
      return method;
    } else {
      return method + ".";
    }
  });

  return (
    <div className="mt-10">
      <div className="grid md:grid-cols-4 card bg-base-300 shadow-lg gap-5 px-8 py-12">
        <div className="col-span-1 px-2">
          <h3 className="text-2xl font-bold mb-7 text-center">Ingredients</h3>
          {ingredients.map((item) => (
            <p
              key={item.index}
              className="my-2 bg-[#33313c] text-base-200 rounded-xl ps-5 pe-2 py-1 text-base font-medium"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="card-title font-bold text-3xl mb-4">{name}</h2>
            <hr className="border-[2.5px] rounded w-40 border-[#ffc919] flex justify-center text-center" />
          </div>
          <div className="flex flex-col flex-grow justify-center">
            <div className="card bg-base-100 mask mask-squircle p-3 rounded-xl">
              <div className="w-full md:h-[450px]">
                <LazyLoad height={`100%`} offset={10}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="mask mask-squircle"
                    src={picture}
                    alt=""
                  />
                </LazyLoad>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-8">
            <div className="card-actions md:justify-center">
              <p className="btn bg-transparent border-2 hover:bg-transparent text-black normal-case text-base font-bold">
                <span className="">{rating}</span>
                <Rating
                  readonly="true"
                  className="ms-2"
                  initialRating={rating}
                  emptySymbol={<BsStar />}
                  fullSymbol={<BsStarFill />}
                />
              </p>
            </div>
            <div className="card-actions md:justify-start">
              <button className="btn  bg-[#ffc919] border-0 text-black hover:bg-amber-400 normal-case text-base font-bold">
                <AiFillHeart className="me-2 text-2xl" /> Add to Favorites
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 ps-4 pe-2">
          <h3 className="text-2xl font-bold mb-7 text-center">
            Cooking Method
          </h3>
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
