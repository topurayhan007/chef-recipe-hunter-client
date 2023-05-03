import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import { useLoaderData } from "react-router-dom";

const ChefsContainer = () => {
  const [loading, setLoading] = useState(true);
  const chefs = useLoaderData();
  useEffect(() => {
    if (!chefs) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div
            className="radial-progress text-warning animate-spin"
            style={{ "--value": 70 }}
          ></div>
        </div>
      );
    } else {
      setLoading(false);
    }
  }, [chefs]);

  console.log(chefs);
  return (
    <>
      {!loading && (
        <div>
          This is Chefs Container
          <div className="grid md:grid-cols-2 lg:gap-10 gap-8 px-5 md:px-8 lg:px-0 mt-6">
            {chefs.map((chef) => (
              <ChefCard key={chef.id} chef={chef}></ChefCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChefsContainer;
