import React from 'react';
import FooterColumn from './FooterColumn';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  const footerData = [
    {
      title: 'DEVELOPMENT',
      links: [
        { name: 'Status', url: 'https://status.nomota.nl' },
        { name: 'Documentation', url: 'https://docs.nomota.nl' },
        { name: 'Whitepaper', url: '/documents/Nomota-AI-whitepaper-v2.pdf' },
      ],
    },
    {
      title: 'ABOUT',
      links: [{ name: 'About us', to: '/about' }],
    },
    {
      title: 'LEGAL',
      links: [
        { name: 'Acceptable Use Policy', to: '/acceptable-use' },
        { name: 'Terms of Service', to: '/terms' },
        { name: 'Privacy policy', to: '/privacy-policy' },
      ],
    },
  ];

  return (
    <footer className="bg-white py-8">
      <div>
        <SocialIcons />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-8">
          {footerData.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">© 2024 Nomota AI</div>
      </div>
    </footer>
  );
};

export default Footer;
