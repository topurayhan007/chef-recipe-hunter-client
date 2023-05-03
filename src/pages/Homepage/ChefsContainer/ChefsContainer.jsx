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
        <div className="mt-20">
          <h4 className="md:text-3xl text-2xl md:px-0 px-2 font-extrabold text-center mb-5">
            Our World Class Chefs
          </h4>
          <div className="flex justify-center mb-4">
            <hr className="border-[2.5px] rounded w-40 border-[#ffc919] flex justify-center text-center" />
          </div>
          <p className="text-center md:text-base text-sm md:px-0 px-2 font-medium text-[#757575] mb-16">
            From TV personals to MasterChefs to Michelin 3-Star owners, we have
            got it all. <br className="hidden md:block" /> Get the secret of
            their hand curated Australian cuisines.
          </p>
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
