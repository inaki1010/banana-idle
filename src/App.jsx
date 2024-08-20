import { useState } from 'react'
import './css/App.css'
import Rock from './Components/Rock'
import UnlockStoreButton from './Components/UnlockStoreButton'

function App() {
  const [count, setCount] = useState(0)

  const handleImageClick = () => {
    setCount((count) => count + 1)
  }

  return (
    <div className="container">
      <div className="card">
        <p className="counter">{count} rocks</p>
        <Rock onClick={handleImageClick} />
        {count >= 5 && <UnlockStoreButton />}
      </div>
    </div>
  )
}

export default App
