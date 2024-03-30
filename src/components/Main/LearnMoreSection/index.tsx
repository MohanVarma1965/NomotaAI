import React from "react";

const LearnMoreSection: React.FC = () => {
  return (
    <div className="bg-white text-center py-12">
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">Learn more about Nokomota AI technology</h2>
      <button className="bg-black text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-200">
        Discover Nokomota AI
      </button>
    </div>
  );
};

export default LearnMoreSection;
