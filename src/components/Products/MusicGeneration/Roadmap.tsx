import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import { IconColor } from '../../RoadmapItem/index';
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
      ],
    },
    {
      title: 'June/July 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
          description: 'Official release of version 1',
        },
        {
          iconColor: 'red' as IconColor,
          description: 'Premium features for stakers',
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
