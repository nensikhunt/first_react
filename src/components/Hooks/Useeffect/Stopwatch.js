import { useEffect } from "react";
import { useState } from "react";

function Stopwatch() {
    const [second,setsecond]=useState(0);
    const [time,settime]=useState(false);
    const timer=()=>{
        settime(!time)
    }
    const reset=()=>{
        setsecond(0);
        settime(false);
    }
    useEffect(()=>{
        if(time===true){
            const interval =setInterval(()=>{
                setsecond(second+1)
            },1000)
            return()=>{
                clearInterval(interval)
            }
        }
    })
    return ( 
        <>
            <h1>stop watch</h1>
            <h1>seconds : {second}</h1>
            <button onClick={timer}>{!time?"start":"stop"} time</button>
            <button onClick={reset}>reset</button>
        </>
     );
}

export default Stopwatch;