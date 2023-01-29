import { toggled } from "../action";

const toggleThunk = (todoId, currentStatus) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "PATCH",
            body: JSON.stringify({
                isCompleted : !currentStatus
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const toggledTodo = await res.json();

        dispatch(toggled(toggledTodo.id))
    }
}

export default toggleThunk;
