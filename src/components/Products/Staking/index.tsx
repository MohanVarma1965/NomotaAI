import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const Staking: React.FC = () => {
  useTitle('Nomota AI - Get rewarded for staking your tokens - 7% - 15% APY');
  return (
    <div className="p-8 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Staking - lock your tokens and receive rewards</h1>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4">
          <div className="flex flex-col md:w-1/2 my-2 px-2 items-center md:items-start space-y-4 bg-gray-200 p-4 rounded-lg">
            <h1 className="text-lg font-bold">Staking pool 1</h1>
            <br />
            <h2>Lock-up period: 14 days</h2>
            <h2>Rewards: 7% APY</h2>
            {/* <img src="/staking.png" alt="Placeholder" className="w-32 h-32" />{' '} */}
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">Coming soon</button>
          </div>
          <div className="flex flex-col md:w-1/2 my-2 px-2 items-center md:items-start space-y-4 bg-gray-200 p-4 rounded-lg">
            <h1 className="text-lg font-bold">Staking pool 2</h1>
            <br />
            <h2>Lock-up period: 56 days</h2>
            <h2>Rewards: 15% APY</h2>
            {/* <img src="/staking.png" alt="Placeholder" className="w-32 h-32" />{' '} */}
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">Coming soon</button>
          </div>
          <div className="flex flex-col md:w-1/2 my-2 px-2 items-center md:items-start space-y-4 bg-gray-200 p-4 rounded-lg">
            <h1 className="text-lg font-bold">
              Bonus Pool <br />
              (available till 15 May 2024)
            </h1>
            <h2>Lock-up period: 63 days(max: 180)</h2>
            <h2>Rewards: 50% APY</h2>
            {/* <img src="/staking.png" alt="Placeholder" className="w-32 h-32" />{' '} */}
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">Coming soon</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src="/staking.png" className="max-w-xs w-full" alt="staking image" />
          </div>
          <div className="md:w-1/2 my-8 flex items-center justify-center">
            <Roadmap />
          </div>
        </div>
        <div>
          <h2 className="my-8 text-xl font-bold md:text-2xl">Staking in the Nomota AI Ecosystem</h2>
          <p className="mb-6 text-gray-600">
            In the context of the Nomota AI ecosystem, staking is not just a means to earn rewards; it's a vital
            component of participating in and contributing to the growth of the platform. By staking tokens,
            participants can secure and power the underlying blockchain network while earning rewards that can be used
            across the Nomota AI platform, including on bot usage and in the marketplace for VPS and GPU rentals. This
            creates a vibrant economy where tokens are not only a form of investment but also a utility for accessing
            and enhancing the platform's features.
          </p>
          <p className="mb-6 text-gray-600">
            Moreover, Nomota AI's staking model is designed to be accessible and rewarding, aligning with the project's
            vision where technology meets creativity. Whether you're a seasoned crypto investor or a newcomer to the
            blockchain space, staking with Nomota AI offers a way to contribute to a cutting-edge platform at the
            intersection of AI and blockchain technology, all while earning rewards that fuel your creative projects and
            investments.
          </p>
          <p className="mb-6 text-gray-600">
            By integrating staking into its ecosystem, Nomota AI reinforces its commitment to a decentralized,
            user-empowered platform. It offers a transparent and fair reward system, encourages long-term participation,
            and ensures the stability and security of the network, paving the way for a future where users are directly
            invested in the platform's success and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staking;
