import { useContext } from "react";
import usercontext from "./Context";

function Child3() {
    const user=useContext(usercontext);
    return ( 
        <>
            <h1>child3 - {user.name}</h1>
        </>
     );
}

export default Child3;