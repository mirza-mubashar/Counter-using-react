import { useState } from 'react'
import './Counter.css'

function Counter() {

  let[count, setCount]=useState(0)  //We can pass anything to it like object, string, boolean etc.

  
  const addVal = () =>{
    setCount( count += 1 )
  }
  const remVal = () =>{
    setCount( count -= 1 )
    if(count < 0){
      setCount(count = 0)
    }
  }
  const reset = () => {
    setCount(count = 0)
  }
  return (
    <>
      <div>
        <h2>Current value in counter : {count}</h2>
        <button className=' btn-element add-btn' onClick={addVal}>Add</button>
        <button className=' btn-element rem-btn' onClick={remVal}>Remove</button>
        <div><button className='btn-element rset-btn' onClick={reset}>Reset</button></div>
      </div>
      <footer>
        <h5>
          This page is an initial simple project <code>Counter</code> by <a href="#">Mubashar Siddique | </a>  <br/> using <a href="https://vitejs.dev/">Vite
Next Generation Frontend Tooling</a>
        </h5>
      </footer>
    </>
  )
}

export default Counter
