import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");
    const handlechange = (e) => {
        setData(e.target.value)
        if (isNaN(data)) {
            alert("input only number")
            setCount(1)
            setData(1)
        }
    }
    const incrementbyinput = () => {
        for (let i = 0; i < data; i++) {
            setCount(prevCount=>prevCount+1);
        }
    }
    const decrementbyinput = () => {
        for (let i = 0; i < data; i++) {
            setCount(prevCount=>prevCount-1);
        }
    }
    return (
        <>
            <h1>Counter {count}</h1>
            <input type={"text"} value={data} onChange={handlechange} />
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => setCount(prevCount=>prevCount+1)}>increment</button>
            <button onClick={() => setCount(prevCount=>prevCount-1)}>decrement</button>
            <button onClick={incrementbyinput}>increment {data}</button>
            <button onClick={decrementbyinput}>decrement {data}</button>
        </>
    );
}

export default Counter;