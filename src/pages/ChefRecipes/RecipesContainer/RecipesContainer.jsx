/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useLoaderData } from "react-router-dom";

const RecipesContainer = () => {
  const [loading, setLoading] = useState(true);

  const chef = useLoaderData();
  const recipes = chef.recipes;
  // console.log(recipes);

  useEffect(() => {
    if (chef !== null) {
      setLoading(false);
    }
  }, [chef]);

  return (
    <div className="mt-32">
      <h2 className="text-5xl font-bold text-center tracking-wide mb-4">
        Recipes
      </h2>
      <div className="flex justify-center">
        <hr className="border-[2.5px] rounded w-52 border-[#ffc919] flex justify-center text-center mb-3" />
      </div>

      <p className="text-center text-lg font-medium mb-5">
        Handpicked recipes by {chef.name}{" "}
      </p>
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="radial-progress text-warning animate-spin"
            style={{ "--value": 70 }}
          ></div>
        </div>
      ) : (
        <>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe}></RecipeCard>
          ))}
        </>
      )}
    </div>
  );
};

export default RecipesContainer;
