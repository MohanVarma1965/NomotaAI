import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import {IconColor} from '../../RoadmapItem/index'
const roadmap = {
  title: 'Roadmap for Image generation',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'green' as IconColor,
          description: 'Beta launch',
        },
        {
          iconColor: 'green' as IconColor,
          description: 'Integrated on status page',
        },
        {
          iconColor: 'green' as IconColor,
          description: 'Single image requests',
        },
        {
          iconColor: 'orange' as IconColor,
          description: 'Upgrade of quality',
        },
        {
          iconColor: 'orange' as IconColor,
          description: 'Premium service for stakers',
        },
      ],
    },
    {
      title: 'May 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
          description: 'Official release of version 1',
        },
        {
          iconColor: 'red' as IconColor,
          description: 'Conversational image generation',
        },
        {
          iconColor: 'red' as IconColor,
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
