import React from 'react';
import { useTitle } from '../../Effects';

const ImageGeneration: React.FC = () => {
  useTitle('Nomota AI - Generate any image by just describing it');
  return <div className="py-12 text-center bg-white max-md:p-8">ImageGeneration</div>;
};

export default ImageGeneration;
