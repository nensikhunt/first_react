import { useRef } from "react";

function Useref() {
    const implement=useRef();
    const handlesubmit=()=>{
        implement.current.focus();
        console.log(implement.current);
        implement.current.style.color="pink "
        implement.current.classList.add("myclass");
        console.log(implement.current);
    }
    return ( 
        <>
            <h1>use ref hook</h1>
            <input type={"text"} ref={implement} />
            <button onClick={handlesubmit}>submit</button>
        </>
     );
}

export default Useref;