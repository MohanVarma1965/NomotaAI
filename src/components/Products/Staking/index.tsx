import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const Staking: React.FC = () => {
  useTitle('Nomota AI - Get rewarded for staking your tokens - 7% - 15% APY');
  return (
    <div>
      <h1>Staking - lock your tokens and receive rewards</h1>
      <div>
        {/* these two blocks should be next to eachother */}
        <div>
          <h1>Staking pool 1</h1>
          <h2>Lock-up period: 14 days</h2>
          <h2>Rewards: 7% APY</h2>
          [placeholder for an image]
          <br />
          [button]Coming soon[/button]
        </div>
        <div>
          <h1>Staking pool 2</h1>
          <h2>Lock-up period: 56 days</h2>
          <h2>Rewards: 15% APY</h2>
          [placeholder for an image]
          <br />
          [button]Coming soon[/button]
        </div>
      </div>
      <img src="/staking.png" />
      <div>
        <h2>Staking in the Nomota AI Ecosystem</h2>
        <p>
          In the context of the Nomota AI ecosystem, staking is not just a means to earn rewards; it's a vital component
          of participating in and contributing to the growth of the platform. By staking tokens, participants can secure
          and power the underlying blockchain network while earning rewards that can be used across the Nomota AI
          platform, including on bot usage and in the marketplace for VPS and GPU rentals. This creates a vibrant
          economy where tokens are not only a form of investment but also a utility for accessing and enhancing the
          platform's features.
        </p>
        <p>
          Moreover, Nomota AI's staking model is designed to be accessible and rewarding, aligning with the project's
          vision where technology meets creativity. Whether you're a seasoned crypto investor or a newcomer to the
          blockchain space, staking with Nomota AI offers a way to contribute to a cutting-edge platform at the
          intersection of AI and blockchain technology, all while earning rewards that fuel your creative projects and
          investments.
        </p>
        <p>
          By integrating staking into its ecosystem, Nomota AI reinforces its commitment to a decentralized,
          user-empowered platform. It offers a transparent and fair reward system, encourages long-term participation,
          and ensures the stability and security of the network, paving the way for a future where users are directly
          invested in the platform's success and growth.
        </p>
      </div>
      <Roadmap />
    </div>
  );
};

export default Staking;
