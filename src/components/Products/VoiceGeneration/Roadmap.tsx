import React from 'react';
import RoadmapItem from '../../RoadmapItem';
import { IconColor } from '../../RoadmapItem/index';
const roadmap = {
  title: 'Voice Generation roadmap',
  months: [
    {
      title: 'April 2024',
      milestones: [
        {
          iconColor: 'Orange' as IconColor,
          description: 'Beta launch',
        },
        {
          iconColor: 'green' as IconColor,
          description: 'Integrated on status page',
        },
      ],
    },
    {
      title: 'May 2024',
      milestones: [
        {
          iconColor: 'red' as IconColor,
          description: 'Improvements on options (speed, voice models, intonation)',
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
