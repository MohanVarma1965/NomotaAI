import React from "react";

const MainPageBanner: React.FC = () => {
  return (
    <div className="py-16 mx-auto text-white bg-gray-800 max-md:p-8 md:container md:text-gray-900 md:bg-white md:flex md:items-center md:justify-between">
      <div className="md:flex-1 md:pr-12 max-md:text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight">The crypto ecosystem for boundless innovation</h1>
        <p className="max-w-xl mb-6 text-gray-300 md:text-gray-900">
          Where technology meets creativity
        </p>
        <div className="mb-8">
          <span className="block mb-4 text-2xl font-bold">Buy <span className="text-red-600">NomotoAI:</span></span>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {/* Replace the placeholder emojis with actual logos */}
            <a href="#" className="flex items-center justify-center px-6 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-red-600 hover:bg-red-600 hover:bg-opacity-25">
              <span>🔶</span>
              <span>Bithumb</span>
            </a>
            <a href="#" className="flex items-center justify-center px-6 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-green-500 hover:bg-green-500 hover:bg-opacity-25">
              <span>🐍</span>
              <span>KuCoin</span>
            </a>
            <a href="#" className="flex items-center justify-center px-6 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-pink-500 hover:bg-pink-500 hover:bg-opacity-25">
              <span>🦄</span>
              <span>Uniswap</span>
            </a>
            <a href="#" className="flex items-center justify-center px-6 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-25">
              <span>🥞</span>
              <span>PancakeSwap</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden mt-8 md:mt-0 lg:flex">
        {/* Replace with actual image source */}
        <img src="./mainImage.webp" alt="Crypto" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MainPageBanner;



// import React from "react";

// const MainPageBanner: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-between p-8 bg-white md:flex-row">
//       <div className="flex-1 mb-8 md:mb-0">
//         <h1 className="mb-4 text-5xl font-bold">The crypto ecosystem for boundless innovation</h1>
//         <p className="mb-6">Where technology meets creativity</p>
//         <button className="px-6 py-3 text-white transition duration-300 bg-black rounded-lg hover:bg-gray-900">
//           Learn about our products
//         </button>
//       </div>
//       <div className="flex-1">
//         <img src={"./mainImage.webp"} alt="Main banner" className="w-full h-auto" />
//       </div>
//     </div>
//   );
// };

// export default MainPageBanner;
