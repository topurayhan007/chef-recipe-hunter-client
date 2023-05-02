import React from "react";
import ChefCard from "../ChefCard/ChefCard";
import { useLoaderData } from "react-router-dom";

const ChefsContainer = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div>
      This is Chefs Container
      <div className="grid md:grid-cols-2 gap-3 mt-6">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefsContainer;
