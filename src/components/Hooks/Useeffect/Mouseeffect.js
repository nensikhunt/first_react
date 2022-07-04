import { useEffect, useState } from "react";

function Mouseeffect() {
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    const [display,setdisplay]=useState(false);
    const logkey=(e)=>{
        setx(e.clientX);
        sety(e.clientY);
    }
    useEffect(()=>{
        // console.log("mouce moved");
        if(display===true){
            console.log(display);
            window.addEventListener('mousemove',logkey);
        }else{
            console.log(display);
            setx(0);
            sety(0);
        }
        // console.log("mokuse is moved");
    })
    return ( 
        <>
            <h1>use eefect</h1>
            <button onClick={()=>setdisplay(!display)}>{!display?"show" :"unshow"} client of x and y</button>
            <h1>x : {x} y : {y}</h1>
        </>
     );
}

export default Mouseeffect;