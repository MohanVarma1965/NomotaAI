import React from 'react';
import FeatureTile from './FeatureTile';
import './FeatureTile.css'; 

const featuresData = [
  {
    title: 'Real-Time Chat',
    description: 'Our bots offer real-time chat assistance.',
    imageUrl: 'real-time-chat.png', 
    linkUrl: '/features/real-time-chat', 
  },
  {
    title: 'Image Generation',
    description: 'Innovative image generation.',
    imageUrl: 'image-generation.webp', 
    linkUrl: '/features/image-generation', 
  },
  {
    title: 'Voice Synthesis',
    description: 'Lifelike voice synthesis.',
    imageUrl: 'real-time-chat.png', 
    linkUrl: '/features/voice-synthesis', 
  },
  {
    title: 'Music Generation',
    description: 'Magic music generation.',
    imageUrl: 'image-generation.webp    ', 
    linkUrl: '/features/music-generation', 
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100 max-md:p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Our App Features</h2>
      </div>
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature, index) => (
          <FeatureTile key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
