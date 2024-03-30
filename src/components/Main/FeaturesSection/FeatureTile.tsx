import React from 'react';

interface FeatureTileProps {
  title: string;
  description: string;
  imageUrl: string; 
}

const FeatureTile: React.FC<FeatureTileProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-32 h-32 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureTile;
