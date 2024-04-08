import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import { IconColor } from '../../RoadmapItem/index';
const roadmap = {
  title: 'Roadmap for our marketplace',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'green' as IconColor,
          description: 'Information page',
        },
        {
          iconColor: 'orange' as IconColor,
          description: 'Development of pricing model',
        },
        {
          iconColor: 'orange' as IconColor,
          description: 'Platform launch',
        },
      ],
    },
    {
      title: 'May 2024',
      milestones: [
        {
          iconColor: 'orange' as IconColor,
          description: 'Onboarding of first providers',
        },
        {
          iconColor: 'red' as IconColor,
          description: 'Payment provider',
        },
        {
          iconColor: 'red' as IconColor,
          description: 'Staking rewards as payment during staking',
        },
      ],
    },
  ],
};

const Roadmap: React.FC = () => {
  return <RoadmapItem {...roadmap} />;
};
export default Roadmap;
