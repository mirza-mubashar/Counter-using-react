import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Count, setCount]=useState(0)
  const addVal = () => {
    setCount(Count += 1)
  }
  const remVal = () => {
    setCount(Count -= 1)

  }
  return (
    <>
      <div>
        <h2>Current value in counter : {Count} </h2>
        <button onClick={addVal}>Add value</button>
        <button onClick={remVal}>Remove value</button>
      </div>

    </>
  )
}

export default App
