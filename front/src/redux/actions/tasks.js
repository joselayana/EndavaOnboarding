import Axios from "axios";
import { CREATE_TASK, SEARCH_TASKS } from "../constants";

export const setTask = (task) => ({
    type: CREATE_TASK,
    task
})

export const findTasks = (tasks) => ({
    type: SEARCH_TASKS,
    tasks
})




export const createTask = (task) => dispatch => {
    return Axios.post("/api/task/newTask", task)
        .then(res => res.data)
        .then(task => dispatch(setTask(task)))
}

export const searchTasks = (userId) => dispatch => {
    return Axios.get(`/api/task/myTasks/${userId}`)
        .then(res => res.data)
        .then(tasks => dispatch(findTasks(tasks)))

}