import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-white bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <a href="/" className="flex items-center text-xl font-bold">
          <span className="mr-2">
            <img src="./temp-tiny.png" />
          </span>
          Nomota AI
        </a>

        <nav className="hidden space-x-6 text-lg md:flex">
          <a href="/products" className="p-2 transition duration-150 ease-in-out hover:text-gray-300">
            Products
          </a>
          <a href="/tokenomics" className="p-2 transition duration-150 ease-in-out hover:text-gray-300">
            Tokenomics
          </a>
          <a href="/roadmap" className="p-2 transition duration-150 ease-in-out hover:text-gray-300">
            Roadmap
          </a>
          <a href="/documentation" className="p-2 transition duration-150 ease-in-out hover:text-gray-300">
            Documentation
          </a>
        </nav>

        <div className="flex items-center space-x-3 md:hidden">
          <span className="px-2 py-1 text-sm border border-gray-600 rounded">EN</span>
          <span className="px-2 py-1 text-sm border border-gray-600 rounded">⚙️</span>
          <span className="px-2 py-1 text-sm border border-gray-600 rounded">👤</span>
        </div>
      </div>

      <div className="flex items-center justify-around py-4 text-lg bg-gray-800 border border-gray-700 md:hidden">
        <a href="/news" className="flex flex-col items-center space-y-1 hover:text-gray-300">
          Products
        </a>
        <a href="/staking" className="flex flex-col items-center space-y-1 hover:text-gray-300">
          Tokenomics
        </a>
        <a href="/bridge" className="flex flex-col items-center space-y-1 hover:text-gray-300">
          Roadmap
        </a>
        <a href="/docs" className="flex flex-col items-center space-y-1 hover:text-gray-300">
          Docs
        </a>
      </div>
    </header>
  );
};

export default Header;
