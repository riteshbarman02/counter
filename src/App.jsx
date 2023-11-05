import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const addValue = () => {
    if(counter<20){
      setCount(counter + 1)
    }
  }
  const removeValue = () => {
    if(counter>0){
      setCount(counter - 1)
    }
  }
  
  return (
    <>
    <h1>counter</h1>
    <h2>counter : {counter}</h2>
    <button onClick={addValue}>add </button>
    <br />
    <button onClick={removeValue}>remove</button>
    </>
  )
}

export default App
