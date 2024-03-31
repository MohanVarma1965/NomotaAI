import React from 'react';
import RoadmapItem from '../../RoadmapItem';

const roadmap = {
  title: 'Roadmap for our marketplace',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'green',
          description: 'Information page',
        },
        {
          iconColor: 'green',
          description: 'Development of pricing model',
        },
        {
          iconColor: 'green',
          description: 'Onboarding of first providers',
        },
        {
          iconColor: 'orange',
          description: 'Platform launch',
        },
      ],
    },
    {
      title: 'May 2024',
      milestones: [
        {
          iconColor: 'red',
          description: 'Payment provider',
        },
        {
          iconColor: 'red',
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
