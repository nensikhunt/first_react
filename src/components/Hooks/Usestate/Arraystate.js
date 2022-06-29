import { useState } from "react";

function Arraystate() {
    const [items,setitems]=useState([])
    const addItem=()=>{
        setitems([
            ...items,
            Math.floor(Math.random()*100)
        ])
    }
    return ( 
        <>
            <h1>set array state</h1>
            {
                items.map((value,index)=>{
                    return (
                        <span key={index}>{value}{"\t"}</span>
                    )
                })
            }
             <br /><button onClick={addItem}>add item</button>
        </>
     );
}

export default Arraystate;      