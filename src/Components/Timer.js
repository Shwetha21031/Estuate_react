import React, { useState } from 'react'

function Timer() {
    const [time,setTime] = useState(0)
    const [id,setid] = useState(0)
    const handleStart = () =>{
              const Time = setInterval(()=>{
                setTime(prev=>prev+1)
              },1000)
              setid(Time)
    }
    const handleStop = () => {
        clearInterval(id);
    }
    const handleReset = () => {
        setTime(0)
    }
  return (
    <div>
        <h2>Timer</h2>
        <h1>{time}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Timer


