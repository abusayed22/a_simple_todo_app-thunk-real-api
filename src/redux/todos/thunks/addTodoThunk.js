import { added } from "../action";

const addTodoThunk = (todoText) => {
    return async (dispatch,getState) => {
        const res = await fetch('http://localhost:9000/todos', {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                isCompleted : false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const todo = await res.json();
        dispatch(added(todo.text))
        
    }
};

export default addTodoThunk;