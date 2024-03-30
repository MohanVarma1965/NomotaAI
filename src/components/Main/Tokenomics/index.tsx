import React from "react";
import { CheckCircleIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const Tokenomics: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Tokenomics</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">
            <span className="text-2xl">75%</span>
          </div>
          <h3 className="text-xl mt-2">Liquidity Pool Uniswap</h3>
          <CheckCircleIcon className="h-8 w-8 mt-2" />
          <p>Locked for 1 Year</p>
          <div>
            A substantial majority of our tokens are dedicated to ensuring robust liquidity on Uniswap. This lock-in
            period signifies our commitment to long-term stability and trust, preventing major fluctuations and
            providing a secure trading environment for all users.
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">
            <span className="text-2xl">10%</span>
          </div>
          <h3 className="text-xl mt-2">Reserved Liquidity Pool </h3>
          <CurrencyDollarIcon className="h-8 w-8 mt-2" />
          <p>CEX</p>
          <div>
            To broaden accessibility and enhance trading options for our users, we've allocated a significant portion of
            our tokens for liquidity pools on centralized exchanges. This strategic reserve is essential for integrating
            into the wider crypto ecosystem, facilitating seamless transactions and enhancing user experience on various
            platforms.
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">
            <span className="text-2xl">10%</span>
          </div>
          <h3 className="text-xl mt-2">Allocated for Staking </h3>
          <CurrencyDollarIcon className="h-8 w-8 mt-2" />
          <p>Rewards</p>
          <div>
            To enrich the Nomota AI experience and incentivize our community, we've allocated 10% of our tokens
            specifically for staking rewards. This allocation is designed to reward users who invest in the stability
            and growth of our platform, offering a tangible appreciation for their confidence and support. By staking
            their tokens, users not only contribute to the security and robustness of Nomota AI but also earn rewards
            that can be used across our platform, including on bot usage and in our marketplace for VPS and GPU rentals.
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">
            <span className="text-2xl">5%</span>
          </div>
          <h3 className="text-xl mt-2">Allocated to Investors</h3>
          <CurrencyDollarIcon className="h-8 w-8 mt-2" />
          <p>Vesting Period of 6 Weeks</p>
          <div>
            Recognizing the crucial role of our early supporters, we've earmarked a portion of tokens for our investors.
            This allocation comes with a vesting period of 6 weeks, ensuring our investors are aligned with the
            long-term vision and success of Nomota AI, while also allowing for gradual market entry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
