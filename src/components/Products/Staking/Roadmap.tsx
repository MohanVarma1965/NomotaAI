import React from 'react';
import RoadmapItem from '../../RoadmapItem';

const roadmap = {
  title: 'Staking roadmap',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'orange',
          description: 'Launch of staking platform',
        },
        {
          iconColor: 'green',
          description: 'Buy/Sell tax auto deposit in staking rewards',
        },
      ],
    },
    {
      title: 'June 2024',
      milestones: [
        {
          iconColor: 'red',
          description: 'Adding 3rd staking pool',
        },
      ],
    },
  ],
};

const Roadmap: React.FC = () => {
  return <RoadmapItem {...roadmap} />;
};
export default Roadmap;
