import { useState, useEffect } from "react";
import "./css/App.css";
import Rock from "./components/Rock";
import Sidebar from "./components/SideBar.jsx";
import { Miner, calculatePrice, buyMiner } from "./components/Miner";

function App() {
  const [rockCount, setRockCount] = useState(0);
  const [miners, setMiners] = useState(0);
  const [rocksPerSecond, setRocksPerSecond] = useState(0);

  const handleRockClick = () => {
    setRockCount(rockCount + 1);
  };

  const handleBuyMiner = () => {
    buyMiner(rockCount, setRockCount, miners, setMiners);
  };

  useEffect(() => {
    setRocksPerSecond(miners);
  }, [miners]);

  const shopItems = [
    {
      name: "Miner",
      cost: calculatePrice(miners),
      currencyCount: rockCount,
      onBuy: handleBuyMiner,
      isVisible: true, // Miners are always visible after they first appear
      quantity: miners,
      productionRate: 1,
    },
  ];

  return (
    <div className="app-container">
      <Sidebar items={shopItems} />
      <div className="main-content">
        <div className="card">
          <p className="counter">
            <span
              className={`counter-content ${
                rockCount.toString().length > 4 ? "small-text" : ""
              }`}
            >
              {rockCount} rocks
            </span>
          </p>

          <p className="rocks-per-second">Rocks per second: {rocksPerSecond}</p>

          <Rock
            onClick={handleRockClick}
            imageUrl={"/rock.svg"}
            altText={"rock"}
          />

          <Miner
            rockCount={rockCount}
            setRockCount={setRockCount}
            miners={miners}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
