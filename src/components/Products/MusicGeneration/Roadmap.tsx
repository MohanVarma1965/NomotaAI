import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import {IconColor} from '../../RoadmapItem/index'
const roadmap = {
  title: 'Roadmap for Music Generation',
  months: [
    {
      title: 'May 2024',
      milestones: [
        {
          iconColor: 'orange' as IconColor,
          description: 'Beta launch',
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
      title: 'June 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
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
