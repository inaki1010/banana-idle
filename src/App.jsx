import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isBouncing, setIsBouncing] = useState(false)

  const handleImageClick = () => {
    setCount((count) => count + 1)
    setIsBouncing(true)

    // Remove the bounce class after the animation ends
    setTimeout(() => {
      setIsBouncing(false)
    }, 500)  // match the duration of the animation
  }

  return (
    <>
      <div className="card">
        <p style={{ fontSize: '50px'}}>
          {count} bananas
        </p>
        <br></br>
        <img
          onClick={handleImageClick}
          src="/banana.png"
          height="300"
          className={isBouncing ? 'bounce' : ''}
        />
        <br></br>
        <br></br>
        {
          count >= 5 && (
            <div style={{paddingTop: '15px'}}>
              <button>Unlock store</button>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App

