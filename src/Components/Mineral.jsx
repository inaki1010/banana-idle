import { useEffect, useRef } from "react";
import "../css/Mineral.css";

function Mineral({ count, imageUrl, altText }) {
  const mineralRef = useRef(null);
  const prevCountRef = useRef(count);

  useEffect(() => {
    if (count > prevCountRef.current) {
      const randomBounce = `${Math.random() * -10}px`;
      const randomBounceHalf = `${Math.random() * -5}px`;
      const randomWobble = `${Math.random() * 15}deg`;
      const randomWobbleHalf = `${Math.random() * 5}deg`;

      mineralRef.current.style.setProperty("--bounce-height", randomBounce);
      mineralRef.current.style.setProperty(
        "--bounce-height-half",
        randomBounceHalf
      );
      mineralRef.current.style.setProperty("--rotate-angle", randomWobble);
      mineralRef.current.style.setProperty(
        "--rotate-angle-half",
        randomWobbleHalf
      );

      mineralRef.current.classList.remove("bounce");
      void mineralRef.current.offsetWidth; // Trigger reflow
      mineralRef.current.classList.add("bounce");
    }

    // Update the previous count value
    prevCountRef.current = count;
  }, [count]);

  return (
    <img
      ref={mineralRef}
      src={imageUrl}
      height="150"
      alt={altText}
      className="mineral-image"
    />
  );
}

export default Mineral;
