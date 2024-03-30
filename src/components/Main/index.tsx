import React from "react";
import MainPageBanner from "./MainPageBanner";
import OnePlaceTiles from "./OnePlaceTiles";
import LearnMoreSection from "./LearnMoreSection";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import FeaturesSection from "./FeaturesSection";

const Main: React.FC = () => {
  return (
    <div>
      <MainPageBanner />
      <OnePlaceTiles />
      <FeaturesSection />
      <Roadmap />
      <LearnMoreSection />
      <Tokenomics />
    </div>
  );
};

export default Main;
