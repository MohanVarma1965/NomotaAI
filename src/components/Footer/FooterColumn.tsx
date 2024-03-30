import React from 'react';
import { Link } from 'react-router-dom';

interface FooterColumnProps {
  title: string;
  links: { 
    name: string; 
    url?: string; // either url (external)
    to?: string;  // or to (internal)
  }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <h5 className="text-xl font-bold mb-4">{title}</h5>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            { link.to 
              ? 
                <Link to={link.to} className="text-base text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {link.name}
                </Link>
              :
                <a href={link.url} target="_blank" className="text-base text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {link.name}
                </a>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
