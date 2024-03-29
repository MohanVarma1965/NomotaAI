import React from 'react';

interface FooterColumnProps {
  title: string;
  links: { name: string; url: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <h5 className="text-xl font-bold mb-4">{title}</h5>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.url} className="text-base text-gray-600 hover:text-gray-800 transition-colors duration-300">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
