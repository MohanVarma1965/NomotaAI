import React, { useState, useEffect } from 'react';
import './MainPageBanner.css';

const MainPageBanner: React.FC = () => {
  return (
    <div className="py-16 mx-auto text-gray-900 md:px-4 max-md:p-8 md:container md:flex md:items-center md:justify-between">
      <div className="md:flex-1 md:pr-12">
        <h1 className="mb-3 text-[2.5rem] md:text-5xl font-bold leading-tight">
          Nomota AI - where technology meets creativity
        </h1>
        <p className="main-banner-subtitle max-w-xl mb-6 text-md md:text-xl text-gray-400">
          <span className="typing-animation">The crypto ecosystem for boundless innovation</span>
        </p>
        <div className="mb-8 flex justify-left">
          <a
            href="https://twitter.com/nomotaai"
            className="transition-colors duration-200 px-3 py-1 hover:text-blue-400 border border-gray-600 rounded-lg "
            target="_blank"
          >
            <svg aria-label="X" className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow us on Twitter for the latest news
          </a>
        </div>
        <div className="mb-8 flex justify-left">
          <a
            href="https://t.me/nomotaai"
            className="transition-colors duration-200 px-3 py-1 hover:text-blue-500 border border-gray-600 rounded-lg "
            target="_blank"
          >
            <svg
              aria-label="Telegram"
              className="w-6 h-6"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.036 15.464l-.932 3.285c-.096.337.418.478.622.2l1.27-1.74 2.457 1.827c.418.313.774.2.905-.295l3.38-15.112c.13-.496-.291-.713-.62-.498L.725 9.607c-.497.238-.498.498-.025.635l3.3 1.054 7.338-4.595c.335-.21.64-.04.283.04z" />
            </svg>
            Join our community on Telegram
          </a>
        </div>
        <div className="mb-8">
          <span className="block mb-4 text-2xl font-bold">
            Buy <span className="text-red-600">Nomota AI:</span>
          </span>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
            <a
              href="https://app.uniswap.org/swap"
              className="flex items-center justify-center px-3 py-1  duration-300 border border-gray-600 rounded-lg hover:border-pink-500 hover:bg-pink-500 hover:bg-opacity-25"
            >
              <span>🦄 &nbsp;</span>
              <span className="text-xs sm:text-sm">Uniswap</span>
            </a>
            <a
              href="#"
              className="banner-button relative flex items-center justify-center px-3 py-1 border border-gray-600 rounded-lg transition-all duration-300 group hover:border-green-500 "
            >
              <img src="/mexc.jpeg" style={{ maxHeight: '40px', height: '100%' }} />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-not-allowed text-white">
                Coming Soon
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
            <span className="block mb-4 text-lg font-bold"> CA: to be announced</span>
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
