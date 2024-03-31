import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import {IconColor} from '../../RoadmapItem/index'
const roadmap = {
  title: 'Roadmap for our Chat bot',
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
          iconColor: 'orange' as IconColor,
          description: 'Conversation history',
        },
        {
          iconColor: 'red' as IconColor,
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
