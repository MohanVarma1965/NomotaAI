import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Milestone {
  title: string;
  description: string;
  iconColor: string;
}

const milestones: Milestone[] = [
  {
    title: 'Nomota AI staking on BNB Chain',
    description: 'Description of BNB Chain staking goes here.',
    iconColor: 'text-green-500',
  },
  {
    title: 'Nomota AI staking on Ethereum',
    description: 'Description of Ethereum staking goes here.',
    iconColor: 'text-red-500',
  },
  {
    title: 'Nomota AI staking on Ethereum',
    description: 'Description of Ethereum staking goes here.',
    iconColor: 'text-red-500',
  },
  {
    title: 'Nomota AI staking on Ethereum',
    description: 'Description of Ethereum staking goes here.',
    iconColor: 'text-red-500',
  },
  {
    title: 'Nomota AI staking on Ethereum',
    description: 'Description of Ethereum staking goes here.',
    iconColor: 'text-red-500',
  },
  {
    title: 'Nomota AI staking on Ethereum',
    description: 'Description of Ethereum staking goes here.',
    iconColor: 'text-red-500',
  },
  {
    title: 'Nomota AI staking on Ethereum',
    description: 'Description of Ethereum staking goes here.',
    iconColor: 'text-red-500',
  },
  {
    title: 'Nomota AI staking on Ethereum',
    description: 'Description of Ethereum staking goes here.',
    iconColor: 'text-red-500',
  },
];

const Roadmap: React.FC = () => {
  return (
    <div className="bg-white text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 id="roadmap" className="text-3xl font-bold text-black">
          Roadmap
        </h2>
        <div className="h-1 bg-red-600 w-full my-5" />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:items-center gap-8 max-w-6xl mx-auto">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2"
          >
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className={`h-5 w-5 ${milestone.iconColor}`} />
              <span>{milestone.title}</span>
            </div>
            <p className="mt-2">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
