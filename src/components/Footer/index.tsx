import React from 'react';
import FooterColumn from './FooterColumn';
import SocialIcons from './SocialIcons';
import './footer.css';

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
      title: 'REWARDS',
      links: [{ name: 'Staking', url: 'https://staking.nomota.nl' }],
    },
    {
      title: 'ABOUT/LEGAL',
      links: [
        { name: 'About us', to: '/about' },
        { name: 'Acceptable Use Policy', to: '/acceptable-use' },
        { name: 'Terms of Service', to: '/terms' },
        { name: 'Privacy policy', to: '/privacy-policy' },
      ],
    },
  ];

  return (
    <footer className="footer-bg-img py-8">
      <div>
        <SocialIcons />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-8">
          {footerData.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>
        <div className="text-center text-sm text-white mt-8">© 2024 Nomota AI</div>
      </div>
    </footer>
  );
};

export default Footer;
