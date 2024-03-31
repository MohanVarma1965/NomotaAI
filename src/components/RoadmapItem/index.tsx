import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  iconColor: string;
}

const RoadmapItem: React.FC<RoadmapProps> = ({ title, months }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full max-w-md p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="text-xl font-bold text-left">{title}</h2>
      {months.map((month, index_m) => (
        <div key={index_m} className="space-y-2">
          <h3 className="text-lg font-semibold">{month.title}</h3>
          {month.milestones.map((milestone, index_ms) => (
            <div key={index_ms} className="flex items-center space-x-2">
              <CheckCircleIcon className={`h-5 w-5 text-${milestone.iconColor}-500`} />
              <span className="flex-1">{milestone.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RoadmapItem;
