import { useState } from "react"

export default function Counter(){
    const[count,setCount] = useState(0);
    const handleIncreaseCount = ()=>{
       const updatedCount = count + 1;
       setCount(updatedCount)
    }
    const handleDecreaseCount = ()=>{
        const decreaseCount = count - 1;
        setCount(decreaseCount);
    }
    const handleResetCount =()=>{
        const resetCount = 0;
        setCount(resetCount);
    }
    return(
        <div className="count">
            <h3>A simple counter app</h3>
            <h2>Count:{count} </h2>
            <button onClick={handleIncreaseCount}>Increase1</button>
            <button onClick={handleDecreaseCount}>Decrease1</button>
            <button onClick={handleResetCount}>Reset Count</button>
        </div>
    )
}