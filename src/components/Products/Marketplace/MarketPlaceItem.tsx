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
      <h3>{title}</h3>
      {items.map((item, index) => (
        <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceItem;
