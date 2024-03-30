import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureTile.css';

interface FeatureTileProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const FeatureTile: React.FC<FeatureTileProps> = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <Link to={linkUrl} className="feature-tile text-center transition duration-300 ease-in-out hover:shadow-xl">
      <img src={imageUrl} alt={title} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-inside list-disc text-left">
        {description.split('. ').map((item, index) => (
          <li key={index} className="mb-1">
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default FeatureTile;
