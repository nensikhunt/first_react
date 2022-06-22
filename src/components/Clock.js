import { useState } from "react";

function Clock() {
    let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const updatetimes=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updatetimes,1000);
    return (
        <>
            <h1>digital watch</h1>
            <h3>Time: {ctime}</h3>
        </>
    );
}

export default Clock;