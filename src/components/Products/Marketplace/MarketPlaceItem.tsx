import React from 'react';

interface MarketPlaceItemProps {
  title: string;
  items: Array<MarketPlaceSubItemProps>;
}

interface MarketPlaceSubItemProps {
  title: string;
  description: string;
}

const MarketPlaceItem: React.FC<MarketPlaceItemProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="mb-8">{title}</h3>
      {items.map((item, index) => (
        <div>
          <h4 className="mb-3 text-xl md:text-2xl text-pink-900">{item.title}</h4>
          <p className="my-3 text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceItem;
