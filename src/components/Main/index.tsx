import React from "react";
import MainPageBanner from "./MainPageBanner";
import OnePlaceTiles from "./OnePlaceTiles";
import LearnMoreSection from "./LearnMoreSection";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import FeaturesSection from "../FeaturesSection";
import SocialIcons from "./SocialIcons";

const Main: React.FC = () => {
  return (
    <div>
      <MainPageBanner />
      <OnePlaceTiles />
      <LearnMoreSection />
      <FeaturesSection />
      <Roadmap />
      <Tokenomics />
      <SocialIcons />
    </div>
  );
};

export default Main;
