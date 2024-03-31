import React, { useEffect } from 'react';
import AOS from 'aos';
import ChatBotRoadmap from '../../Products/ChatBot/Roadmap';
import ImageGenerationRoadmap from '../../Products/ImageGeneration/Roadmap';
import MarketplaceRoadmap from '../../Products/Marketplace/Roadmap';
import MusicGenerationRoadmap from '../../Products/MusicGeneration/Roadmap';
import StakingRoadmap from '../../Products/Staking/Roadmap';
import VoiceGenerationRoadmap from '../../Products/VoiceGeneration/Roadmap';

import 'aos/dist/aos.css';

interface Milestone {
  title: string;
  description: string;
  iconColor: string;
}

const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 id="roadmap" className="text-3xl font-bold text-black">
          Roadmaps
        </h2>
        <div className="h-1 bg-red-600 w-full my-5" />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:items-center gap-8 max-w-6xl mx-auto ">
        <ChatBotRoadmap />
        <ImageGenerationRoadmap />
        <MarketplaceRoadmap />
        <MusicGenerationRoadmap />
        <StakingRoadmap />
        <VoiceGenerationRoadmap />

        {/* {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-sm bg-gray-700 p-4 rounded-md shadow-md space-x-2 transition-all 
            duration-300 transform hover:scale-105 hover:border hover:border-red-500"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className={`h-5 w-5 ${milestone.iconColor}`} />
              <span>{milestone.title}</span>
            </div>
            <p className="mt-2">{milestone.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Roadmap;
