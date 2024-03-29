import React from 'react';
import FooterColumn from './FooterColumn';

const Footer: React.FC = () => {
  const footerData = [
    {
      title: 'ECOSYSTEM',
      links: [
        { name: 'Community', url: '/community' },
        { name: 'Jobs', url: '/jobs' },
        { name: 'Wallets', url: '/wallets' },
        { name: 'Dapps', url: '/dapps' },
        { name: 'Brand Hub', url: '/brand-hub' },
        { name: 'Telemetry', url: '/telemetry' },
        { name: 'Treasury', url: '/treasury' },
      ],
    },
    {
      title: 'FEATURES',
      links: [
        { name: 'Technology', url: '/technology' },
        { name: 'BlockSpace', url: '/blockspace' },
        { name: 'DOT token', url: '/dot_token' },
      ],
    },
    {
      title: 'DEVELOPMENT',
      links: [
        { name: 'Documentation', url: '/documentation' },
        { name: 'Grants', url: '/grants' },
        { name: 'Bounties', url: '/bounties' },
      ],
    },
    {
      title: 'ABOUT',
      links: [
        { name: 'About us', url: '/about_website' },
        { name: 'Blog', url: '/blog' },
        { name: 'Newsroom', url: '/newsroom' },
      ],
    },
    
  ];

  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 Web3 Foundation | Legal Disclosures | Disclaimer | Privacy | Manage Cookies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
