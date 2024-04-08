import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import { IconColor } from '../../RoadmapItem/index';
const roadmap = {
  title: 'Roadmap for Image generation',
  months: [
    {
      title: 'March 2024',
      milestones: [
        {
          iconColor: 'green' as IconColor,
          description: 'Determine beta limits',
        },
        {
          iconColor: 'green' as IconColor,
          description: 'Include in status page',
        },
        {
          iconColor: 'orange' as IconColor,
          description: 'Launch beta with single image request',
        },
      ],
    },
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'green' as IconColor,
          description: 'Upgrade image model and quality',
        },
        {
          iconColor: 'green' as IconColor,
          description: 'Add watermark for beta',
        },
        {
          iconColor: 'orange' as IconColor,
          description: 'Remove beta limits for stakers',
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
    {
      title: 'June 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
          description: 'Alternative resolutions',
        },
      ],
    },
    {
      title: 'Q3 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
          description: 'Combine with other bots',
        },
      ],
    },
  ],
};

const Roadmap: React.FC = () => {
  return <RoadmapItem {...roadmap} />;
};
export default Roadmap;
