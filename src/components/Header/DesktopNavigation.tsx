import React from 'react';

const DesktopNavigation: React.FC = () => {
  return (
    <div className="items-center justify-between hidden w-full md:flex">
      <nav className="text-lg">
        <ul className="flex space-x-6">
          <li>
            <a href="/products" className="p-2 text-white transition duration-150 ease-in-out hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="/tokenomics" className="p-2 text-white transition duration-150 ease-in-out hover:text-gray-300">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="/roadmap" className="p-2 text-white transition duration-150 ease-in-out hover:text-gray-300">
              Roadmap
            </a>
          </li>
          <li>
            <a href="/documentation" className="p-2 text-white transition duration-150 ease-in-out hover:text-gray-300">
              Documentation
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavigation;
