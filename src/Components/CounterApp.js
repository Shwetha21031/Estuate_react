import React, { useState } from 'react'

function CounterApp() {
   const [count,setCount] = useState(0)

   const handleIncrement = () => {
     setCount((prevState)=> prevState + 1);
   }
   const handleReset = () => {
     setCount(0);
   }
   const handleDecrement = () => {
     setCount((prevState)=> prevState - 2);
   }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterApp