import { useEffect, useState } from "react";

function Interval() {
    const [second,setsecond]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setsecond(second=>second+1)
        },1000);
        return()=>{
            clearInterval(interval)
        }
    })
    return ( 
        <>
            <h1>time interval</h1>
            <h1>seconds : {second}</h1>
        </>
     );
}

export default Interval;