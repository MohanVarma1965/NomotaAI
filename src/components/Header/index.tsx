import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="text-white bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link to="/" className="flex items-center text-xl font-bold">
          <span className="mr-2">
            <img src="/logo-xs.png" />
          </span>
          Nomota AI
        </Link>

        <nav className="hidden space-x-2 text-lg md:flex">
          <Link to="/products" className="p-2 transition duration-150 ease-in-out hover:text-gray-300">
            Products
          </Link>
          <Link to="/#tokenomics" className="p-2 transition duration-150 ease-in-out hover:text-gray-300">
            Tokenomics
          </Link>
          <Link to="/#roadmap" className="p-2 transition duration-150 ease-in-out hover:text-gray-300">
            Roadmap
          </Link>
          <a
            href="https://docs.nomota.nl"
            target="_blank"
            className="p-2 transition duration-150 ease-in-out hover:text-gray-300"
          >
            Documentation
          </a>
          <a
            href="/documents/Nomota%20AI%20whitepaper%20v1%20feb%202024.pdf"
            target="_blank"
            className="p-2 transition duration-150 ease-in-out hover:text-gray-300"
          >
            Whitepaper
          </a>
        </nav>
      </div>

      <div className="flex items-center justify-around py-4 text-lg bg-gray-800 border border-gray-700 md:hidden">
        <Link to="/products" className="flex flex-col items-center space-y-1 hover:text-gray-300">
          Products
        </Link>
        <a href="/#tokenomcs" className="flex flex-col items-center space-y-1 hover:text-gray-300">
          Tokenomics
        </a>
        <a
          href="/documents/Nomota%20AI%20whitepaper%20v1%20feb%202024.pdf"
          target="_blank"
          className="flex flex-col items-center space-y-1 hover:text-gray-300"
        >
          Whitepaper
        </a>
      </div>
    </header>
  );
};

export default Header;
