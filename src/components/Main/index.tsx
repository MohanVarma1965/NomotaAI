import React from 'react';
import MainPageBanner from './MainPageBanner';
import OnePlaceTiles from './OnePlaceTiles';
import KeyFeatures from './KeyFeatures';
import LearnMoreSection from './LearnMoreSection';
import Roadmap from './Roadmap';
import Tokenomics from './Tokenomics';
import FeaturesSection from '../FeaturesSection';
import SocialIcons from './SocialIcons';
import { useTitle } from '../Effects';
const Main: React.FC = () => {
  useTitle('Nomota AI - Where technology meets creativity');
  return (
    <div>
      <MainPageBanner />
      {/* <OnePlaceTiles /> */}
      {/* <KeyFeatures /> */}
      {/* <LearnMoreSection /> */}
      <FeaturesSection />
      <Roadmap />
      <Tokenomics />
      <SocialIcons />
    </div>
  );
};

export default Main;
