import React from 'react';
import RoadmapItem from '../../RoadmapItem';

const roadmap = {
  title: 'Roadmap for our Chat bot',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'green',
          description: 'Beta launch',
        },
        {
          iconColor: 'green',
          description: 'Integrated on status page',
        },
        {
          iconColor: 'orange',
          description: 'Conversation history',
        },
        {
          iconColor: 'red',
          description: 'Premium service for stakers',
        },
      ],
    },
    {
      title: 'May 2024',
      milestones: [
        {
          iconColor: 'red',
          description: 'Official release of version 1',
        },
        {
          iconColor: 'red',
          description: 'Improved language model',
        },
      ],
    },
  ],
};

const Roadmap: React.FC = () => {
  return <RoadmapItem {...roadmap} />;
};
export default Roadmap;
