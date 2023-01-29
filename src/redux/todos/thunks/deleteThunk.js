import { deleted } from "../action";

const deleteThunk = (todoId) => {
    return async (dispatch)=> {
         await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "DELETE",

        })
        // const deleteTodo = await res.json();
        dispatch(deleted(todoId))
    }
}

export default deleteThunk;