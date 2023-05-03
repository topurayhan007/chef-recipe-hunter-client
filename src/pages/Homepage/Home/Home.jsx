import React from "react";
import Banner from "../Banner/Banner";
import InfoSection from "../InfoSection/InfoSection";
import ChefsContainer from "../ChefsContainer/ChefsContainer";
import CookingTip from "../CookingTip/CookingTip";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="lg:w-[1320px] mx-auto">
        <InfoSection></InfoSection>
        <ChefsContainer></ChefsContainer>
        <CookingTip></CookingTip>
      </div>
    </div>
  );
};

export default Home;
