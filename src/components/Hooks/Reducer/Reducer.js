export const reducerTodo = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            state=state+1;
            break;
        case "decrement":
            state=state-1;
            break;
        case "reset":
            state=0;
            break;
        default:
            break;
    }
    return state;
}