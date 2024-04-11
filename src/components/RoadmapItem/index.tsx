import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Roadmap.css';

export type IconColor = 'green' | 'orange' | 'red';
interface RoadmapProps {
  title: string;
  months: MonthProps[];
}

interface MonthProps {
  title: string;
  milestones: MilestoneProps[];
}

interface MilestoneProps {
  description: string;
  iconColor: IconColor;
}

const RoadmapItem: React.FC<RoadmapProps> = ({ title, months }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const colorClassMap = {
    green: 'text-green-500',
    orange: 'text-orange-500',
    red: 'text-red-500',
  };

  return (
    <div
      className="mx-auto w-full max-w-md p-4 md:p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="text-lg font-bold text-left">{title}</h2>
      {months.map((month, index_m) => (
        <div key={index_m} className="space-y-2">
          <h3 className="text-md font-semibold">{month.title}</h3>
          {month.milestones.map((milestone, index_ms) => (
            <div key={index_ms} className="flex items-center space-x-2">
              <CheckCircleIcon className={`h-5 w-5 ${colorClassMap[milestone.iconColor] || 'text-current'}`} />
              <span className="flex-1 text-sm">{milestone.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RoadmapItem;
