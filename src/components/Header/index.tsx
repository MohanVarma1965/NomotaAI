import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <div className="text-xl font-bold">
          <a href="/" className="flex items-center">
            <span className="mr-2">🚀</span>
            NOMOTA AI
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a href="/products" className="hover:text-gray-700">
                Products
              </a>
            </li>
            <li>
              <a href="/tokenomics" className="hover:text-gray-700">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="/roadmap" className="hover:text-gray-700">
                Roadmap
              </a>
            </li>
            <li>
              <a href="/documentation" className="hover:text-gray-700">
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
