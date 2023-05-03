/* eslint-disable react/prop-types */
import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import LazyLoad from "react-lazy-load";
import Rating from "react-rating";

const FeaturedRecipeCard = ({ recipe }) => {
  const { name, picture, rating } = recipe;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="flex h-80">
        <img src={picture} className="h-full w-full object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center">
          <h2 className="card-title text-lg">{name}</h2>
        </div>
        <div className="card-actions justify-end">
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
      </div>
    </div>
  );
};

export default FeaturedRecipeCard;
