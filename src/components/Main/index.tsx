import React from 'react';
import MainPageBanner from './MainPageBanner';
import KeyFeatures from './KeyFeatures';
import Roadmap from './Roadmap';
import Tokenomics from './Tokenomics';
import { useTitle } from '../Effects';
const Main: React.FC = () => {
  useTitle('Nomota AI - Where technology meets creativity');
  return (
    <div>
      <MainPageBanner />
      <KeyFeatures />
      <Roadmap />
      <Tokenomics />
    </div>
  );
};

export default Main;
