import React from "react";

const MainPageBanner: React.FC = () => {
  return (
    <div className="py-16 mx-auto text-white bg-gray-800 md:px-4 max-md:p-8 md:container md:text-gray-900 md:bg-white md:flex md:items-center md:justify-between">
      <div className="md:flex-1 md:pr-12">
        <h1 className="mb-6 text-[2.5rem] md:text-5xl font-bold leading-tight">The crypto ecosystem for boundless innovation</h1>
        <p className="max-w-xl mb-6 text-2xl text-gray-300 md:text-gray-900">
          Where technology meets creativity
        </p>
        <div className="mb-8">
          <span className="block mb-4 text-2xl font-bold">Buy <span className="text-red-600">NomotoAI:</span></span>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
            <a href="#" className="flex items-center justify-center px-6 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-green-500 hover:bg-green-500 hover:bg-opacity-25">
              <span>🐍 &nbsp;</span>
              <span>KuCoin</span>
            </a>
            <a href="#" className="flex items-center justify-center px-6 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-pink-500 hover:bg-pink-500 hover:bg-opacity-25">
              <span>🦄 &nbsp;</span>
              <span>Uniswap</span>
            </a>
            <a href="#" className="flex items-center justify-center px-6 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-25">
              <span>🥞 &nbsp;</span>
              <span>PancakeSwap</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden mt-8 md:mt-0 lg:flex">
        <img src="./mainImage.webp" alt="Crypto" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MainPageBanner;
