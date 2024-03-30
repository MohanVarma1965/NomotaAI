import React from 'react';
import FeatureTile from './FeatureTile';

const featuresData = [
  {
    title: 'Real-Time Chat',
    description: 'Our bots offer real-time chat assistance.',
    imageUrl: '/path-to-your-image.jpg', 
  },
  {
    title: 'Image Generation',
    description: 'Innovative image generation.',
    imageUrl: '/path-to-your-image.jpg', 
  },
  {
    title: 'Voice Synthesis',
    description: 'Lifelike voice synthesis.',
    imageUrl: '/path-to-your-image.jpg', 
  },
  {
    title: 'Music Generation',
    description: 'Magic music generation.',
    imageUrl: '/path-to-your-image.jpg',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our App Features</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureTile key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
