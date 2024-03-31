import React, { useEffect } from 'react';
import FeatureTile from './FeatureTile';
import './FeatureTile.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const featuresData = [
  {
    title: 'VPS / GPU Marketplace',
    description: 'Rent out or hire VPS and GPU.',
    imageUrl: 'image-generation.webp',
    linkUrl: '/products/marketplace',
  },
  {
    title: 'Real-Time Chat',
    description: 'Our bots offer real-time chat assistance.',
    imageUrl: 'real-time-chat.png',
    linkUrl: '/products/chatbot',
  },
  {
    title: 'Image Generation',
    description: 'Innovative image generation.',
    imageUrl: 'image-generation.webp',
    linkUrl: '/products/image-generation',
  },
  {
    title: 'Voice Synthesis',
    description: 'Lifelike voice synthesis.',
    imageUrl: 'voice.png',
    linkUrl: '/products/voice-synthesis',
  },
  {
    title: 'Music Generation',
    description: 'Magic music generation.',
    imageUrl: 'music.png',
    linkUrl: '/products/music-generation',
  },
  {
    title: 'Staking',
    description: 'Stake your $NAI for 7% to 15% APY',
    imageUrl: 'staking.png',
    linkUrl: '/products/staking',
  },
];

const FeaturesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="py-12 bg-white max-md:p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold" data-aos="fade-right" data-aos-delay="550">
          Our products
        </h2>
      </div>
      <div
        className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-left"
        data-aos-delay="550"
      >
        {featuresData.map((feature, index) => (
          <FeatureTile key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
