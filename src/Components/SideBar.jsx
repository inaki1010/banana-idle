import React from "react";
import "../css/Sidebar.css";

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <h1>Shop</h1>
      {items.map((item, index) => (
        <h5 key={index}>
          <h2>{item.name}</h2>
          <h4>
            <i>{item.quantity} owned</i>
          </h4>
          <p>Produces: {item.productionRate} rocks/second</p>
          <button
            onClick={item.onBuy}
            disabled={item.currencyCount < item.cost}
          >
            Buy {item.name} ({item.cost} rocks)
          </button>
        </h5>
      ))}
    </div>
  );
}

export default Sidebar;
