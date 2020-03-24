import Axios from "axios";
import { CREATE_TASK, SEARCH_TASKS, SINGLE_TASK_RECRUIT } from "../constants";

export const setTask = (task) => ({
    type: CREATE_TASK,
    task
})

export const findTasks = (tasks) => ({
    type: SEARCH_TASKS,
    tasks
})

export const singleTaskRecruit = (task) => ({
    type: SINGLE_TASK_RECRUIT,
    task
})



export const createTask = (task) => dispatch => {
    return Axios.post("/api/task/newTask", task)
        .then(res => res.data)
        .then(task => dispatch(setTask(task)))
}

export const updateTaskState = (objTaskState) => dispatch => {
    return Axios.put(`/api/task/edit/${objTaskState.taskId}`, objTaskState)
        .then(res => res.data)
        .then(task => dispatch(setTask(task)))
}

export const searchTasks = (userId) => dispatch => {
    return Axios.get(`/api/task/myTasks/${userId}`)
        .then(res => res.data)
        .then(tasks => dispatch(findTasks(tasks)))

}

export const searchSingleTaskRecruit = (taskId) => dispatch => {
    return Axios.get(`/api/task/${taskId}`)
        .then(res => res.data)
        .then(task => dispatch(singleTaskRecruit(task)))
}
