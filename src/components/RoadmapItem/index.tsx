import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Roadmap.css';

interface RoadmapProps {
  src: string;
}

const RoadmapItem: React.FC<RoadmapProps> = ({ src }) => {
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
      <img src={src} />
    </div>
  );
};

export default RoadmapItem;
