/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useLoaderData } from "react-router-dom";

const RecipesContainer = () => {
  const chef = useLoaderData();
  const recipes = chef.recipes;
  // console.log(recipes);

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

      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe}></RecipeCard>
      ))}
    </div>
  );
};

export default RecipesContainer;
