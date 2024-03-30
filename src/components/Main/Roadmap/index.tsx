import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Roadmap: React.FC = () => {
  return (
    <div className="py-12 text-white bg-gray-900 md:px-4 max-md:p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold uppercase">Roadmap</h2>
        <div className="w-full h-1 my-4 bg-red-600" />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 md:flex-row md:flex-wrap md:items-center">
        {/* Individual Milestone */}
        <div className="flex items-center p-4 space-x-2 text-sm bg-gray-700 rounded-md shadow-md">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span>Nomota AI staking on BNB Chain</span>
        </div>
        {/* Repeat the milestone block for each item */}
        <div className="flex items-center p-4 space-x-2 text-sm bg-gray-700 rounded-md shadow-md">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span>Nomota AI staking on Ethereum</span>
        </div>

        <div className="flex items-center p-4 space-x-2 text-sm bg-gray-700 rounded-md shadow-md">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span>Nomota AI staking on Ethereum</span>
        </div>
        <div className="flex items-center p-4 space-x-2 text-sm bg-gray-700 rounded-md shadow-md">
          <CheckCircleIcon className="w-5 h-5 text-red-500" />
          <span>Nomota AI staking on Ethereum</span>
        </div>
        <div className="flex items-center p-4 space-x-2 text-sm bg-gray-700 rounded-md shadow-md">
          <CheckCircleIcon className="w-5 h-5 text-red-500" />
          <span>Nomota AI staking on Ethereum</span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
