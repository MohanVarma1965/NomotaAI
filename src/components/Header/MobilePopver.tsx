import React from 'react';
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';

const MobileNavigation: React.FC = () => {
  return (
    <Popover as="nav" className="md:hidden">
      {({ open }) => (
        <>
          <Popover.Button
            className={`text-white p-2 rounded-md ${open ? 'bg-transparent' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'}
              />
            </svg>
          </Popover.Button>

          {open && <div className="fixed inset-0 z-10 bg-black bg-opacity-50" aria-hidden="true"></div>}

          <Popover.Panel
            className={`fixed inset-0 z-20 transform transition ease-in-out duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="h-full bg-white">
              <div className="flex justify-end p-4">
                <Popover.Button className="p-2 text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Popover.Button>
              </div>
              <nav className="flex flex-col pl-4 space-y-4">
                <Link to="/products" className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100">
                  Products
                </Link>
                <Link to="/#tokenomics" className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100">
                  Tokenomics
                </Link>
                <Link to="/#roadmap" className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100">
                  Roadmap
                </Link>
                <a
                  href="https://staking.nomota.nl"
                  target="_blank"
                  className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100"
                >
                  Staking
                </a>
                <a
                  href="/documents/Nomota%20AI%20whitepaper%20v1%20feb%202024.pdf"
                  target="_blank"
                  className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100"
                >
                  Whitepaper
                </a>
              </nav>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default MobileNavigation;
