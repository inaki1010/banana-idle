import { useRef } from 'react'
import '../css/Rock.css'

function Rock({ onClick }) {
  const rockRef = useRef(null)

  const handleClick = (event) => {
    const rect = rockRef.current.getBoundingClientRect()
    const clickX = event.clientX - rect.left // X position within the image
    const clickY = event.clientY - rect.top // Y position within the image

    // Normalize click position to a range of -1 to 1
    const normalizedX = (clickX / rect.width) * 2 - 1
    const normalizedY = (clickY / rect.height) * 2 - 1

    // Adjust the random values based on click position
    const randomBounce = `${normalizedY * -50}px`
    const randomBounceHalf = `${normalizedY * -25}px`
    const randomWobble = `${normalizedX * 45}deg`
    const randomWobbleHalf = `${normalizedX * 30}deg`

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
