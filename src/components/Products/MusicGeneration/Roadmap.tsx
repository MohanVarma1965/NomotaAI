import React from 'react';
import RoadmapItem from '../../RoadmapItem';

const roadmap = {
  title: 'Roadmap for Music Generation',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'orange',
          description: 'Beta launch',
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
      ],
    },
  ],
};

const Roadmap: React.FC = () => {
  return <RoadmapItem {...roadmap} />;
};
export default Roadmap;
