import { useState } from "react";

function Arraystate() {
    const [items,setitems]=useState([]);
    const [id,setid]=useState(0);
    const addItem=(e)=>{
        setid(id+1);
        setitems([
            ...items,
            {id:id,number:Math.floor(Math.random()*100)}
        ])
    }
    return ( 
        <>
            <h1>set array state</h1>
            {
                items.map((value,index)=>{
                    return (
                        <span key={index}>{value.id}:{value.number}{"\t"}</span>
                    )
                })
            }
            <br /><button onClick={addItem}>add item</button>
        </>
     );
}

export default Arraystate;      