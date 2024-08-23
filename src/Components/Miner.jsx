import { useState, useEffect } from "react";

const calculatePrice = (miners) => {
  const basePrice = 10;
  const increment = 1.2;
  return Math.round(basePrice * Math.pow(increment, miners));
};

const buyMiner = (rockCount, setRockCount, miners, setMiners) => {
  const price = calculatePrice(miners);
  if (rockCount >= price) {
    setRockCount(rockCount - price);
    setMiners(miners + 1);
  }
};

function Miner({ rockCount, setRockCount, miners }) {
  useEffect(() => {
    if (miners > 0) {
      const interval = setInterval(() => {
        setRockCount((prevCount) => prevCount + miners);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [miners, setRockCount]);
}

// Export the necessary functions and component
export { Miner, calculatePrice, buyMiner };
