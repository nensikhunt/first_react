import { useState } from "react";

function Count() {
    let [count1, setCount] = useState(10);
    let [msg, setMsg] = useState(false);
    if (count1 < 0) {
        setCount(0);
        setMsg(true);
    }

    let buttonStyle = { marginLeft: "46.5%", padding: "5px", fontSize: "15px", cursor: "pointer" }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>{count1}</h1>
            <button style={buttonStyle} onClick={() => setCount(count1 + 1)}>INCREMENT</button>
            <br /><br />
            <button style={buttonStyle} onClick={() => setCount(count1 - 1)}>DECCREMENT</button>
            {count1==0 ? <h1 style={{ textAlign: "center" }}>count=0</h1> : <h1 style={{ textAlign: "center" }}>count={count1}</h1>}
            {/* {msg ? <h1 style={{ textAlign: "center" }}>count=0</h1> : <h1 style={{ textAlign: "center" }}>count!=0</h1>} */}

        </>
    );
}

export default Count;