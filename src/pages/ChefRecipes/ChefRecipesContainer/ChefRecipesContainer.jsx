import React from "react";
import ChefBanner from "../ChefBanner/ChefBanner";
import RecipesContainer from "../RecipesContainer/RecipesContainer";

const ChefRecipesContainer = () => {
  return (
    <div>
      <ChefBanner></ChefBanner>
      <RecipesContainer></RecipesContainer>
    </div>
  );
};

export default ChefRecipesContainer;
