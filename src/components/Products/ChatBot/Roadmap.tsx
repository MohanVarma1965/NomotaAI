import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import { IconColor } from '../../RoadmapItem/index';
const roadmap = {
  title: 'Roadmap for our Chat bot',
  months: [
    {
      title: 'March 2024',
      milestones: [
        {
          iconColor: 'green' as IconColor,
          description: 'Add conversation style chat',
        },
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
          description: 'Launch beta',
        },
      ],
    },
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'orange' as IconColor,
          description: 'Conversation history',
        },
        {
          iconColor: 'red' as IconColor,
          description: 'Remove beta limits for stakers',
        },
      ],
    },
    {
      title: 'May 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
          description: 'Official launch of version 1',
        },
        {
          iconColor: 'red' as IconColor,
          description: 'Improved language model and knowledge',
        },
      ],
    },
    {
      title: 'Q3 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
          description: 'further improvements to knowledge base',
        },
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
