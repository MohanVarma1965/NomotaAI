import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface RoadmapProps {
  title: string;
  months: Array<MonthProps>;
}

interface MonthProps {
  title: string;
  milestones: Array<MilestoneProps>;
}

interface MilestoneProps {
  description: string;
  iconColor: string;
}

const RoadmapItem: React.FC<RoadmapProps> = (item) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2 transition-all 
            duration-300 transform hover:scale-105 hover:border hover:border-red-500"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <div className="flex items-center space-x-2">
        <h2>{item.title}</h2>
        {item.months.map((month, index_m) => (
          <div key={index_m}>
            <h3>{month.title}</h3>
            {month.milestones.map((milestone, index_ms) => (
              <div key={index_ms}>
                <CheckCircleIcon className={`h-5 w-5 text-${milestone.iconColor}-500`} />
                <span>{milestone.description}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapItem;
