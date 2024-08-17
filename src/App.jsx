import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isPoppedOut, setIsPoppedOut] = useState(false)

  const handleImageClick = () => {
    setCount((count) => count + 1)
    setIsPoppedOut(true)
    setTimeout(() => setIsPoppedOut(false), 200) // Reset after animation
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
          className={isPoppedOut ? 'pop-out' : 'pop-in'}
          height="300"
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

