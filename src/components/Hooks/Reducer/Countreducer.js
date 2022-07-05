import { useReducer } from "react";
import { Reducer } from "./Reducer";

const initialstate = 0;

export const Countreducer = () => {
    const [state, dispatch] = useReducer(Reducer, initialstate);

    return (
        <>
            <div>
                <p>{state}</p>
                <div>
                    <button onClick={()=>dispatch({type:"increment"})}>increment</button>
                    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
                    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
                </div>
            </div>
        </>
    )
}