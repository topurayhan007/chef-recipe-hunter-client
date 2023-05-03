import React from "react";
import Banner from "../Banner/Banner";
import ChefsContainer from "../ChefsContainer/ChefsContainer";
import CookingTip from "../CookingTip/CookingTip";
import FeaturedRecipes from "../FeaturedRecipes/FeaturedRecipes";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="lg:w-[1320px] mx-auto">
        <FeaturedRecipes></FeaturedRecipes>
        <ChefsContainer></ChefsContainer>
        <CookingTip></CookingTip>
      </div>
    </div>
  );
};

export default Home;
