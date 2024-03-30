import React from 'react';
import { Popover } from '@headlessui/react';

const MobileNavigation: React.FC = () => {
  return (
    <Popover as="nav" className="md:hidden">
      {({ open }) => (
        <>
          <Popover.Button className={`text-white p-2 rounded-md ${open ? 'bg-transparent' : 'bg-gray-700 hover:bg-gray-600'}`}>
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
                d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"}
              />
            </svg>
          </Popover.Button>

          {open && (
            <div className="fixed inset-0 z-10 bg-black bg-opacity-50" aria-hidden="true"></div>
          )}

          <Popover.Panel className={`fixed inset-0 z-20 transform transition ease-in-out duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
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
                <a href="/products" className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100">Products</a>
                <a href="/tokenomics" className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100">Tokenomics</a>
                <a href="/roadmap" className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100">Roadmap</a>
                <a href="/documentation" className="p-2 text-lg font-medium text-gray-900 rounded-md hover:bg-gray-100">Documentation</a>
              </nav>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default MobileNavigation;
