import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefBanner = () => {
  const chef = useLoaderData();
  // console.log(chef);
  const { name, picture, experience, likes, numOfRecipes } = chef;

  return (
    <div className="flex justify-between items-center">
      <div className="flex-1"></div>
      <div
        className="flex-1 overflow-hidden"
        style={{
          borderRadius: "25% 0 0 60%",
        }}
      >
        <img className="object-cover" src={picture} alt="" />
      </div>
    </div>
  );
};

export default ChefBanner;
