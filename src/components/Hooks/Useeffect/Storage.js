import { useEffect } from "react";
import { useState } from "react";

function Storage() {
    // const initialCount=Number(window.localStorage.getItem('count')||0)
    const [count,setcount]=useState(0);
    const increment=()=>setcount(count+1)
    useEffect(()=>{
        
        localStorage.setItem('count', count)
    })
    return (
        <button onClick={increment}>{count}</button>
    )
}

export default Storage;