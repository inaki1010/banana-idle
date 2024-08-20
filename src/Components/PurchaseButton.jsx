import React from 'react';

function PurchaseButton({ itemName, cost, currencyCount, onBuy }) {
  return (
    <button
      onClick={onBuy}
      disabled={currencyCount < cost}
      className="buy-button"
    >
      Buy 1 {itemName} for {cost} {currencyCount >= cost ? 'Rocks' : 'Coal'}
    </button>
  );
}

export default PurchaseButton;
