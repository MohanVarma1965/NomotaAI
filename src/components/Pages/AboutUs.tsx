import React from 'react';
import { useTitle } from '../Effects';

const AboutUs: React.FC = () => {
  useTitle('Nomota AI - About Us');

  return (
    <div className="p-8 py-12 text-gray-800 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">About Us</h1>
        <h2 className="mb-8 text-xl font-semibold md:text-2xl">Meet the Team Behind Nomota AI</h2>
        <p className="mb-6 text-gray-600">
          At Nomota AI, our passion is at the intersection of technology and creativity. Founded by a group of visionaries in 2023, our goal has always been to harness the power of artificial intelligence to pioneer solutions that propel us towards a brighter future.
        </p>
        <p className="mb-6 text-gray-600">
          Our team is made up of experts from various fields, each bringing their unique perspective and expertise to the table. Together, we're committed to developing products and services that not only meet the current demands of our users but also anticipate the needs of tomorrow.
        </p>
        <p className="mb-6 text-gray-600">
          From our early days in Montreal to our current status as leaders in the AI and gaming industry, our journey has been one of constant learning, adaptation, and growth. We're excited about what the future holds and are dedicated to continuing our mission of driving innovation in every project we undertake.
        </p>

        <div className="mt-10">
          <h3 className="mb-4 text-lg font-semibold md:text-xl">Our Team</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-sm">
              <div className="w-24 h-24 mb-3 overflow-hidden bg-gray-300 rounded-full">
              </div>
              <h4 className="mb-1 font-semibold">Casper</h4>
              <p className="mb-3 text-sm text-gray-600">CEO & Founder</p>
              <p className="text-sm text-gray-600">
                Casper's vision for Nomota AI has always been about breaking barriers and exploring the uncharted territories of AI and gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
