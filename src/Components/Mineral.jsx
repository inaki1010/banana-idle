import { useEffect, useRef } from 'react';
import '../css/Mineral.css';

function Mineral({ count, imageUrl, altText }) {
  const mineralRef = useRef(null);

  useEffect(() => {
    if (count > 0) {
      const randomBounce = `${Math.random() * -50}px`;
      const randomBounceHalf = `${Math.random() * -25}px`;
      const randomWobble = `${Math.random() * 45}deg`;
      const randomWobbleHalf = `${Math.random() * 30}deg`;

      mineralRef.current.style.setProperty('--bounce-height', randomBounce);
      mineralRef.current.style.setProperty('--bounce-height-half', randomBounceHalf);
      mineralRef.current.style.setProperty('--rotate-angle', randomWobble);
      mineralRef.current.style.setProperty('--rotate-angle-half', randomWobbleHalf);

      mineralRef.current.classList.remove('bounce');
      void mineralRef.current.offsetWidth; // Trigger reflow
      mineralRef.current.classList.add('bounce');
    }
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
