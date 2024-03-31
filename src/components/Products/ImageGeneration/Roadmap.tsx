import React from 'react';
import RoadmapItem from '../../RoadmapItem';

const roadmap = {
  title: 'Roadmap for Image generation',
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
          iconColor: 'green',
          description: 'Single image requests',
        },
        {
          iconColor: 'orange',
          description: 'Upgrade of quality',
        },
        {
          iconColor: 'orange',
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
          description: 'Conversational image generation',
        },
        {
          iconColor: 'red',
          description: 'Upload image as base model',
        },
      ],
    },
  ],
};

const Roadmap: React.FC = () => {
  return <RoadmapItem {...roadmap} />;
};
export default Roadmap;
