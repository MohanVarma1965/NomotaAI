import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import {IconColor} from '../../RoadmapItem/index'
const roadmap = {
  title: 'Staking roadmap',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'orange' as IconColor,
          description: 'Launch of staking platform',
        },
        {
          iconColor: 'green' as IconColor,
          description: 'Buy/Sell tax auto deposit in staking rewards',
        },
      ],
    },
    {
      title: 'June 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
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
