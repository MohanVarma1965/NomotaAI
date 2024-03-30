import React from 'react';
import { CheckCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Tokenomics: React.FC = () => {
  const generateCircle = (percentage: number) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = ((100 - percentage) / 100) * circumference;

    let strokeColor;
    if (percentage >= 75) {
      strokeColor = '#10b981';
    } else if (percentage >= 50) {
      strokeColor = '#f59e0b';
    } else {
      strokeColor = '#ef4444';
    }

    return (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="54" fill="white" fontSize="20" textAnchor="middle" fontWeight="bold">{`${percentage}%`}</text>
      </svg>
    );
  };

  return (
    <div className="py-12 text-white bg-gradient-to-b from-gray-800 to-gray-900 md:px-4 max-md:p-8">
      <div className="mb-12 text-center">
        <h2 id="tokenomics" className="text-4xl font-bold">
          Tokenomics
        </h2>
      </div>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
        <div className="p-6 transition duration-300 ease-in-out bg-gray-700 shadow-lg rounded-xl hover:scale-105">
          <h3 className="mb-2 text-2xl font-bold text-center">Liquidity Pool Uniswap</h3>
          <div className="flex justify-center">{generateCircle(75)}</div>
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="w-8 h-8 text-green-400" />
          </div>
          <p className="mb-4 font-semibold text-center">Locked for 1 Year</p>
          <p className="leading-relaxed text-md">
            A substantial majority of our tokens are dedicated to ensuring robust liquidity on Uniswap. This lock-in
            period signifies our commitment to long-term stability and trust, preventing major fluctuations and
            providing a secure trading environment for all users.
          </p>
        </div>

        <div className="p-6 transition duration-300 ease-in-out bg-gray-700 shadow-lg rounded-xl hover:scale-105">
          <h3 className="mb-2 text-2xl font-bold text-center">Reserved Liquidity Pool</h3>
          <div className="flex justify-center">{generateCircle(10)}</div>
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="w-8 h-8 text-green-400" />
          </div>
          <p className="mb-4 font-semibold text-center">Reserved for MEXC and other future CEX listings</p>
          <p className="leading-relaxed text-md">
            To broaden accessibility and enhance trading options for our users, we've allocated a significant portion of
            our tokens for liquidity pools on centralized exchanges. This strategic reserve is essential for integrating
            into the wider crypto ecosystem, facilitating seamless transactions and enhancing user experience on various
            platforms.
          </p>
        </div>

        <div className="p-6 transition duration-300 ease-in-out bg-gray-700 shadow-lg rounded-xl hover:scale-105">
          <h3 className="mb-2 text-2xl font-bold text-center">Allocated for Staking Rewards</h3>
          <div className="flex justify-center">{generateCircle(10)}</div>
          <div className="flex justify-center mb-4">
            <CurrencyDollarIcon className="w-8 h-8 text-green-400" />
          </div>
          <p className="mb-4 font-semibold text-center">7% - 15% APY</p>
          <p className="leading-relaxed text-md">
            To enrich the Nomota AI experience and incentivize our community, we've allocated 10% of our tokens
            specifically for staking rewards. This allocation is designed to reward users who invest in the stability
            and growth of our platform, offering a tangible appreciation for their confidence and support.
          </p>
        </div>

        <div className="p-6 transition duration-300 ease-in-out bg-gray-700 shadow-lg rounded-xl hover:scale-105">
          <h3 className="mb-2 text-2xl font-bold text-center">Allocated for Investors</h3>
          <div className="flex justify-center">{generateCircle(5)}</div>
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="w-8 h-8 text-green-400" />
          </div>
          <p className="mb-4 font-semibold text-center">Vesting Period of 6 weeks</p>
          <p className="leading-relaxed text-md">
            Recognizing the crucial role of our early supporters, we've earmarked a portion of tokens for our investors.
            This allocation comes with a vesting period of 6 weeks, ensuring our investors are aligned with the
            long-term vision and success of Nomota AI, while also allowing for gradual market entry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
