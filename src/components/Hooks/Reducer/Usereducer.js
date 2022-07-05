import { useEffect, useReducer } from "react";
import { reducerTodo } from "./Reducer";

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];
function Usereducer() {
    const [todos, dispatch] = useReducer(reducerTodo, initialTodos);
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };
    useEffect(() => {
        console.log(todos)
    }, [todos])
    return (
        <>
            <h1>use reducer hook</h1>
            {
                todos.map((value) => {
                    return (
                        <div key={value.id}>
                            <input type="checkbox" checked={value.complete} onChange={() => handleComplete(value)} /> 
                            {value.title}
                        </div>
                    )
                })
            }
        </>
    );
}

export default Usereducer;