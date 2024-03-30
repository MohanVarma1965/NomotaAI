import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Roadmap: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Roadmap</h2>
        <div className="h-1 bg-red-600 w-full my-5" />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:items-center gap-8">
        <div className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
            <span>Nomota AI staking on BNB Chain</span>
          </div>
          <p className="mt-2">Description of BNB Chain staking goes here.</p>
        </div>

        <div className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-red-500" />
            <span>Nomota AI staking on Ethereum</span>
          </div>
          <p className="mt-2">Description of Ethereum staking goes here.</p>
        </div>
        <div className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-red-500" />
            <span>Nomota AI staking on Ethereum</span>
          </div>
          <p className="mt-2">Description of Ethereum staking goes here.</p>
        </div>
        <div className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-red-500" />
            <span>Nomota AI staking on Ethereum</span>
          </div>
          <p className="mt-2">Description of Ethereum staking goes here.</p>
        </div>
        <div className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-red-500" />
            <span>Nomota AI staking on Ethereum</span>
          </div>
          <p className="mt-2">Description of Ethereum staking goes here.</p>
        </div>
        <div className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-red-500" />
            <span>Nomota AI staking on Ethereum</span>
          </div>
          <p className="mt-2">Description of Ethereum staking goes here.</p>
        </div>
        <div className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-red-500" />
            <span>Nomota AI staking on Ethereum</span>
          </div>
          <p className="mt-2">Description of Ethereum staking goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
