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
              <a href="/whitepaper" className="hover:text-gray-700">
                Whitepaper
              </a>
            </li>
            <li>
              <a href="/learn" className="hover:text-gray-700">
                Learn
              </a>
            </li>
            <li>
              <a href="/use-velo" className="hover:text-gray-700">
                Use Nomota AI
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-700">
                About Nomota AI
              </a>
            </li>
            <li>
              <a href="/community" className="hover:text-gray-700">
                Community
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
