import { useRef } from 'react'
import '../css/Rock.css'

function Rock({ onClick }) {
  const rockRef = useRef(null)

  const handleClick = () => {
    // Generate random values for bounce and wobble
    const randomBounce = `${Math.random() * -20 - 10}px`
    const randomBounceHalf = `${Math.random() * -10 - 5}px`
    const randomWobble = `${Math.random() * 10 - 5}deg`
    const randomWobbleHalf = `${Math.random() * 5 - 2.5}deg`

    // Apply these random values as CSS variables
    rockRef.current.style.setProperty('--bounce-height', randomBounce)
    rockRef.current.style.setProperty('--bounce-height-half', randomBounceHalf)
    rockRef.current.style.setProperty('--rotate-angle', randomWobble)
    rockRef.current.style.setProperty('--rotate-angle-half', randomWobbleHalf)

    // Re-trigger the animation
    rockRef.current.classList.remove('bounce')
    void rockRef.current.offsetWidth; // Trigger reflow
    rockRef.current.classList.add('bounce')

    onClick()
  }

  return (
    <img
      ref={rockRef}
      onClick={handleClick}
      src="/rock.svg"
      height="300"
      alt="rock"
      className="rock-image"
    />
  )
}

export default Rock
