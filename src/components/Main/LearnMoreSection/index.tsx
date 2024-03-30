import React from 'react';

const LearnMoreSection: React.FC = () => {
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      <h2 className="mb-4 text-2xl font-semibold md:text-4xl">Learn more about Nomota AI technology</h2>
      <button className="px-8 py-3 font-medium text-white transition-colors duration-200 bg-black rounded-lg hover:bg-gray-800">
        Discover Nomota AI
      </button>
    </div>
  );
};

export default LearnMoreSection;
