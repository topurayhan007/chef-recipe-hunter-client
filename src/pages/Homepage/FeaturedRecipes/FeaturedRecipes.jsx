import React, { useEffect, useState } from "react";
import FeaturedRecipeCard from "../FeaturedRecipeCard/FeaturedRecipeCard";

const FeaturedRecipes = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  useEffect(() => {
    fetch(
      "https://chef-recipe-hunter-server-topurayhan007.vercel.app/featured-recipes"
    )
      .then((res) => res.json())
      .then((data) => setFeaturedRecipes(data));
  }, []);

  return (
    <div className="mt-20 flex flex-col justify-center items-center text-center">
      <h4 className="md:text-3xl text-2xl md:px-0 px-2 font-extrabold text-center mb-5">
        Featured Recipes
      </h4>
      <div className="flex justify-center mb-4">
        <hr className="border-[2.5px] rounded w-40 border-[#ffc919] flex justify-center text-center" />
      </div>
      <p className="text-center md:text-base text-sm md:px-0 px-2 font-medium text-[#757575] mb-16">
        From classic favorites to modern twists, find your new favorite
        <br className="hidden md:block" />
        Australian recipe in our Featured Recipes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-12 lg:px-0 md:gap-8">
        {featuredRecipes.map((recipe, index) => (
          <FeaturedRecipeCard key={index} recipe={recipe}></FeaturedRecipeCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
