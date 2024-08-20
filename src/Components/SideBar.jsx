import React from 'react';
import '../css/Sidebar.css';
import ShopItem from './ShopItem';

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <h3>Shop</h3>
      {items.map((item, index) => (
        <ShopItem
          key={index}
          name={item.name}
          cost={item.cost}
          currencyCount={item.currencyCount}
          onBuy={item.onBuy}
        />
      ))}
    </div>
  );
}

export default Sidebar;
