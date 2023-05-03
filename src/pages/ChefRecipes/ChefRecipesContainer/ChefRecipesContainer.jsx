import React from "react";
import ChefBanner from "../ChefBanner/ChefBanner";
import RecipesContainer from "../RecipesContainer/RecipesContainer";

const ChefRecipesContainer = () => {
  return (
    <div>
      <ChefBanner></ChefBanner>
      <div className="lg:w-[1320px] mx-auto flex justify-center">
        <RecipesContainer></RecipesContainer>
      </div>
    </div>
  );
};

export default ChefRecipesContainer;
