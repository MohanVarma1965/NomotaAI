import React, { useState, useEffect } from 'react';
import './MainPageBanner.css'; 

const MainPageBanner: React.FC = () => {

  const [subTitle, setSubTitle] = useState('');
  const fullSubTitle = "Where technology meets creativity...";
  const typingSpeed=150;

  useEffect(() => {
    function typeWriter(text: string, i: number) {
      if (i < text.length) {
        setSubTitle(text.substring(0, i + 1));
        setTimeout(() => typeWriter(text, i + 1), typingSpeed);
      } else {
        setTimeout(() => typeWriter(text, 0), 2000);
      }
    }

    typeWriter(fullSubTitle, 0);
  }, [fullSubTitle]);

  return (
    <div className="main-page-banner bg-gray-400 text-gray-800 py-16 px-4 md:flex md:items-center md:justify-between md:px-8 md:py-20">
      <div className="main-banner-content md:flex-1 md:pr-12">
        <h1 className="main-banner-title mb-6 text-5xl font-bold leading-tight">
          The crypto ecosystem for boundless innovation
        </h1>
        <p className="main-banner-subtitle max-w-xl mb-6 text-xl md:text-2xl text-gray-400">
          {subTitle}
        </p>
        <div className="mb-8">
          <span className="block mb-4 text-2xl font-bold">
            Buy <span className="text-red-600">Nomota AI:</span>
          </span>

        <div className="main-banner-buttons">
          <a href="#" className="banner-button bg-transparent border border-gray-500 text-black hover:bg-green-500 hover:text-white px-4 py-2 rounded transition duration-500 ease-in-out">
          🐍 KuCoin
          </a>
          <a href="#" className="banner-button bg-transparent border border-gray-500 text-black hover:bg-pink-500 hover:text-white px-4 py-2 rounded transition duration-500 ease-in-out mx-2">
          🦄 Uniswap
          </a>
          <a href="#" className="banner-button bg-transparent border border-gray-500 text-black hover:bg-yellow-400 hover:text-white px-4 py-2 rounded transition duration-500 ease-in-out">
          🥞 PancakeSwap
          </a>
        </div>
        </div>
      </div>
      <div className="main-banner-image flex-1 hidden lg:block">
        <img src="./mainImage.webp" alt="Crypto" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MainPageBanner;
