import React from 'react';
import PurchaseButton from './PurchaseButton';

function ShopItem({ name, cost, currencyCount, onBuy }) {
  return (
    <div className="shop-item">
      <p>{name}</p>
      <PurchaseButton
        itemName={name}
        cost={cost}
        currencyCount={currencyCount}
        onBuy={onBuy}
      />
    </div>
  );
}

export default ShopItem;
