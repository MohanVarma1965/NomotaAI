import React from "react";
import MainPageBanner from "./MainPageBanner";
import OnePlaceTiles from "./OnePlaceTiles";
import LearnMoreSection from "./LearnMoreSection";

const Main: React.FC = () => {
  return (
    <div>
      <MainPageBanner />
      <OnePlaceTiles />
      <LearnMoreSection />
    </div>
  );
};

export default Main;
