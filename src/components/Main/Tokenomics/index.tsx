import React from 'react';
import { CheckCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Tokenomics: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Tokenomics</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tile 1 */}
        <div className="bg-gray-700 rounded-xl p-6 shadow-lg transition duration-300 ease-in-out hover:scale-105">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold">76%</span>
            </div>
          </div>
          <h3 className="text-xl text-center font-bold mb-2">Liquidity Pool Uniswap</h3>
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="h-8 w-8 text-green-400" />
          </div>
          <p className="mb-4 text-center font-semibold">Locked for 1 Year</p>
          <p className="text-sm leading-relaxed">
            A substantial majority of our tokens are dedicated to ensuring robust liquidity on Uniswap. This lock-in
            period signifies our commitment to long-term stability and trust, preventing major fluctuations and
            providing a secure trading environment for all users.
          </p>
        </div>


        <div className="bg-gray-700 rounded-xl p-6 shadow-lg transition duration-300 ease-in-out hover:scale-105">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold">10%</span>
            </div>
          </div>
          <h3 className="text-xl text-center font-bold mb-2">Reserved Liquidity Pool</h3>
          <div className="flex justify-center mb-4">
            <CurrencyDollarIcon className="h-8 w-8 text-green-400" />
          </div>
          <p className="mb-4 text-center font-semibold">CEX</p>
          <p className="text-sm leading-relaxed">
            To broaden accessibility and enhance trading options for our users, we've allocated a significant portion of
            our tokens for liquidity pools on centralized exchanges. This strategic reserve is essential for integrating
            into the wider crypto ecosystem, facilitating seamless transactions and enhancing user experience on various
            platforms.
          </p>
        </div>

        <div className="bg-gray-700 rounded-xl p-6 shadow-lg transition duration-300 ease-in-out hover:scale-105">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold">10%</span>
            </div>
          </div>
          <h3 className="text-xl text-center font-bold mb-2">Allocated for Staking</h3>
          <div className="flex justify-center mb-4">
            <CurrencyDollarIcon className="h-8 w-8 text-green-400" />
          </div>
          <p className="mb-4 text-center font-semibold">Rewards</p>
          <p className="text-sm leading-relaxed">
          To enrich the Nomota AI experience and incentivize our community, we've allocated 10% of our tokens
            specifically for staking rewards. This allocation is designed to reward users who invest in the stability
            and growth of our platform, offering a tangible appreciation for their confidence and support. By staking
            their tokens, users not only contribute to the security and robustness of Nomota AI but also earn rewards
            that can be used across our platform, including on bot usage and in our marketplace for VPS and GPU rentals.
          </p>
        </div>

        <div className="bg-gray-700 rounded-xl p-6 shadow-lg transition duration-300 ease-in-out hover:scale-105">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold">5%</span>
            </div>
          </div>
          <h3 className="text-xl text-center font-bold mb-2">Allocated for Investors</h3>
          <div className="flex justify-center mb-4">
            <CurrencyDollarIcon className="h-8 w-8 text-green-400" />
          </div>
          <p className="mb-4 text-center font-semibold">Vesting Period of 6 weeks</p>
          <p className="text-sm leading-relaxed">
            To enrich the Nomota AI experience and incentivize our community, we've allocated 10% of our tokens specifically for staking rewards. This allocation is designed to reward users who invest in the stability and growth of our platform, offering a tangible appreciation for their confidence and support. By staking
            their tokens, users not only contribute to the security and robustness of Nomota AI but also earn rewards
            that can be used across our platform, including on bot usage and in our marketplace for VPS and GPU rentals.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Tokenomics;
