import React from "react";

const MainPageBanner: React.FC = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between p-8">
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-4">The crypto ecosystem for boundless innovation</h1>
        <p className="mb-6">Where technology meets creativity</p>
        <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition duration-300">
          Learn about our products
        </button>
      </div>
      <div className="flex-1">
        <img src={"./mainImage.webp"} alt="Main banner" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MainPageBanner;
