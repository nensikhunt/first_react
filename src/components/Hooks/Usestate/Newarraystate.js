import { useState } from "react";

function Newarraystate() {
    const [newarray,setnewarray]=useState(["cdde","wded","dw"]);
    const handlesubmit = () => {
        const setarray=prompt("enter array element");
        setnewarray(setarray)
    }
    return (
        <>
            <h1>new array state</h1>
            <span>{newarray}</span>
            <br /><button onClick={handlesubmit}>add array</button>
        </>
    );
}

export default Newarraystate;