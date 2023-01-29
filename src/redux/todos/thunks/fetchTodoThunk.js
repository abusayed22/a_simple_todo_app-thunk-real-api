import { fetchData } from "../action";

const fetchTodoThunk = async(dispatch) => {
    const res = await fetch('http://localhost:9000/todos')
    const todos = await res.json();
    return dispatch(fetchData(todos))
}
export default fetchTodoThunk;