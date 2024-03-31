import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const ImageGeneration: React.FC = () => {
  useTitle('Nomota AI - Generate any image by just describing it');
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      ImageGeneration
      <Roadmap />
    </div>
  );
};

export default ImageGeneration;
