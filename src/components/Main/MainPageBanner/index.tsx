import React, { useState, useEffect } from 'react';
import './MainPageBanner.css'; 

const MainPageBanner: React.FC = () => {

  const [subTitle, setSubTitle] = useState('');
  const fullSubTitle = "Where technology meets creativity";
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
    <div className="py-16 mx-auto text-gray-900 md:px-4 max-md:p-8 md:container md:flex md:items-center md:justify-between">
      <div className="md:flex-1 md:pr-12">
        <h1 className="mb-6 text-[2.5rem] md:text-5xl font-bold leading-tight">
          The crypto ecosystem for boundless innovation
        </h1>
        <p className="main-banner-subtitle max-w-xl mb-6 text-xl md:text-2xl text-gray-400">
          {subTitle}
        </p>
        <div className="mb-8">
          <span className="block mb-4 text-2xl font-bold">
            Buy <span className="text-red-600">Nomota AI:</span>
          </span>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
            <a
              href="#"
              className="flex items-center justify-center px-3 py-3 transition-colors duration-300 border border-gray-600 rounded-lg hover:border-pink-500 hover:bg-pink-500 hover:bg-opacity-25"
            >
              <span>🦄 &nbsp;</span>
              <span className="text-xs sm:text-sm">Uniswap</span>
            </a>
            <a
              href="#"
              className="relative flex items-center justify-center px-3 py-3 transition-all duration-300 border border-gray-600 rounded-lg group overflow-hidden"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ transition: 'opacity 300ms' }} className="z-10 group-hover:opacity-50">
                🥞 &nbsp;
                <span className="text-xs sm:text-sm">PancakeSwap</span>
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                style={{
                  transition: 'opacity 300ms',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  pointerEvents: 'none',
                  transform: 'scale(1.05)',
                }}
              >
                Coming Soon
              </span>
            </a>

            <a
              href="#"
              className="relative flex items-center justify-center px-3 py-3 transition-all duration-300 border border-gray-600 rounded-lg group overflow-hidden"
              style={{ textDecoration: 'none' }}
            >
              <span style={{ transition: 'opacity 300ms' }} className="z-10 group-hover:opacity-50">
                🐍 &nbsp;
                <span className="text-xs sm:text-sm">KuCoin</span>
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                style={{
                  transition: 'opacity 300ms',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  pointerEvents: 'none',
                  transform: 'scale(1.05)',
                }}
              >
                Coming Soon
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="main-banner-image flex-1 lg:block">
        <img src="/homepage.png" alt="Crypto" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MainPageBanner;
