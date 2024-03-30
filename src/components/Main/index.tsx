import React from "react";
import MainPageBanner from "./MainPageBanner";
import OnePlaceTiles from "./OnePlaceTiles";
import LearnMoreSection from "./LearnMoreSection";
import Roadmap from "./Roadmap";

const Main: React.FC = () => {
  return (
    <div>
      <MainPageBanner />
      <OnePlaceTiles />
      <LearnMoreSection />
      <Roadmap />
    </div>
  );
};

export default Main;
