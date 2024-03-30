// Header.tsx
import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Header: React.FC = () => {
  return (
    <header className="py-4 text-white bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="flex items-center text-xl font-bold">
          <span className="mr-2">🚀</span>
          NOMOTA AI
        </a>
        <div className="hidden md:block">
          <DesktopNavigation />
        </div>
        <div className="md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
