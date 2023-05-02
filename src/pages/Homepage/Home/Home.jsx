import React from "react";
import Banner from "../Banner/Banner";
import InfoSection from "../InfoSection/InfoSection";
import ChefsContainer from "../ChefsContainer/ChefsContainer";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="lg:w-[1320px] mx-auto">
        <InfoSection></InfoSection>
        <ChefsContainer></ChefsContainer>
      </div>
    </div>
  );
};

export default Home;
