import React from "react";
import { CheckCircleIcon, CurrencyDollarIcon, TrashIcon } from "@heroicons/react/24/outline";

const Tokenomics: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Tokenomics</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Token Allocation */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">
            <span className="text-2xl">86%</span>
          </div>
          <h3 className="text-xl mt-2">Liquidity</h3>
          <CheckCircleIcon className="h-8 w-8 mt-2" />
          <p>No team allocation</p>
        </div>
        {/* Other Sections... */}
        <div className="flex flex-col items-center">
          {/* ... */}
          <h3 className="text-xl mt-2">CEX Listings</h3>
          <CurrencyDollarIcon className="h-8 w-8 mt-2" />
          <p>No bullshit</p>
        </div>
        <div className="flex flex-col items-center">
          {/* ... */}
          <h3 className="text-xl mt-2">Marketing</h3>
          <TrashIcon className="h-8 w-8 mt-2" />
          <p>Renounced</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl mt-2">Promotions</h3>
          <TrashIcon className="h-8 w-8 mt-2" />
          <p>Meme potential</p>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Tokenomics;
