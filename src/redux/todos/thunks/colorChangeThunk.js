import { colorChange } from "../action"

const colorChangeThunk = (todoId,colorValue) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                color: colorValue
            }),
            headers:{
                "Content-type": "application/json; charset= UTF-8"
            }
        })
        const colorTodo = await res.json()
        dispatch(colorChange(colorTodo.id,colorTodo.color))

    }
}
export default colorChangeThunk;