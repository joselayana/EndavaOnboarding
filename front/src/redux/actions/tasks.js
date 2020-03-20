import Axios from "axios";
import { CREATE_TASK } from "../constants";

export const setTask = (task) => ({
    type: CREATE_TASK,
    task
})

export const createTask = (task) => dispatch => {
    console.log("llegue al actionnnnnn");

    return Axios.post("/api/task/newTask", task)
        .then(res => res.data)
        .then(task => dispatch(setTask(task)))
}
