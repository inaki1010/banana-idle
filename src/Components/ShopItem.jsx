import React from "react";
import PurchaseButton from "./PurchaseButton";

function ShopItem({
  name,
  cost,
  currencyCount,
  onBuy,
  quantity,
  productionrate,
}) {
  return (
    <div className="shop-item">
      <p>{name}</p>
      <PurchaseButton
        itemName={name}
        cost={cost}
        currencyCount={currencyCount}
        onBuy={onBuy}
        quantity={quantity}
        productionrate={productionrate}
      />
    </div>
  );
}

export default ShopItem;
