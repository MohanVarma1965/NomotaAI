import React, { useEffect } from 'react';
import AOS from 'aos';
import ChatBotRoadmap from '../../Products/ChatBot/Roadmap';
import ImageGenerationRoadmap from '../../Products/ImageGeneration/Roadmap';
import MarketplaceRoadmap from '../../Products/Marketplace/Roadmap';
import MusicGenerationRoadmap from '../../Products/MusicGeneration/Roadmap';
import VoiceGenerationRoadmap from '../../Products/VoiceGeneration/Roadmap';

import 'aos/dist/aos.css';

const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className=" roadmap-bg-image px-4 py-12 bg-white">
      <div className="mb-8 text-center">
        <h2 id="roadmap" className="text-3xl font-bold text-white">
          Roadmap
        </h2>
        <div className="w-56 h-1 mx-auto my-4 bg-red-600" />
      </div>
      <div className="flex flex-col items-stretch justify-center max-w-6xl gap-8 mx-auto md:flex-row md:flex-wrap">
        <ChatBotRoadmap />
        <ImageGenerationRoadmap />
        <MarketplaceRoadmap />
        <MusicGenerationRoadmap />
        <VoiceGenerationRoadmap />
      </div>
    </div>
  );
};

export default Roadmap;
