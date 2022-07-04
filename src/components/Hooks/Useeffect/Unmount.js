import { useEffect } from "react";
import { useState } from "react";

function Unmount() {
    const [count,setcount]=useState(0);
    const countadd=()=>{
        setcount(count+1)
    }
    const onclick=()=>{
        console.log("click");
    }
    useEffect(()=>{
        // console.log("mount , updated");
        window.addEventListener("click",onclick)
        return()=>{
            window.removeEventListener("click",onclick)
            // console.log("unmpount");
        }
    },[count])
    return ( 
        <>
            <h1>unmount</h1>
            <h1>count : {count}</h1>
            <button onClick={countadd}>count add</button>
        </>
     );
}

export default Unmount;