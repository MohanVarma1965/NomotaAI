import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-4 text-white bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6 lg:px-8">
        <div className="text-xl font-bold md:text-2xl">
          <a href="/" className="flex items-center transition duration-150 ease-in-out transform hover:scale-105">
            <span className="mr-2 text-2xl md:text-3xl">🚀</span>
            NOMOTA AI
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4 md:space-x-8 lg:space-x-12">
            <li>
              <a href="/products" className="transition-colors duration-150 hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="/tokenomics" className="transition-colors duration-150 hover:text-gray-300">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="/roadmap" className="transition-colors duration-150 hover:text-gray-300">
                Roadmap
              </a>
            </li>
            <li>
              <a href="/documentation" className="transition-colors duration-150 hover:text-gray-300">
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
