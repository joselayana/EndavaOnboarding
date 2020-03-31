import Axios from "axios";
import { SEARCH_TASKS, SINGLE_TASK_RECRUIT, SEARCH_TASKS_RECRUIT, SEARCH_ALL_TASKS, SEARCH_TASKS_LIST, SET_ERROR } from "../constants";

export const findTasks = (tasks) => ({
    type: SEARCH_TASKS,
    tasks
})

export const findAllTasks = (allTasks) => ({
    type: SEARCH_ALL_TASKS,
    allTasks
})

export const findTasksList = (tasksList) => ({
    type: SEARCH_TASKS_LIST,
    tasksList
})

export const setError = () => ({
    type: SET_ERROR,
})

export const singleTaskRecruit = (task) => ({
    type: SINGLE_TASK_RECRUIT,
    task
})

export const findTasksRecruits = (tasksRecruits) => ({
    type: SEARCH_TASKS_RECRUIT,
    tasksRecruits
})

export const createTask = (task) => dispatch => {
    return Axios.post("/api/task/newTask", task)
        .then(res => res.data)
        .then(tasksList => dispatch(findTasksList(tasksList)))
}

export const updateTaskState = (objTaskState) => dispatch => {
    return Axios.put(`/api/task/edit/${objTaskState.taskId}`, objTaskState)
        .then(res => res.data)
        .then(task => {
            dispatch(findTasksRecruits(task))
            dispatch(searchTasks(objTaskState.userId))
            dispatch(searchAllTasks())

            // searchAllTasks
            // searchTasks
        })
}

export const searchTasks = (userId, busqueda) => dispatch => {
    {
        if (busqueda === undefined) {
            return Axios.get(`/api/task/myTasks/${userId}`)
                .then(res => res.data)
                .then(tasks => dispatch(findTasks(tasks)))
        } else {
            return Axios.get(`/api/task/myTasks/${userId}?s=${busqueda}`)
                .then(res => res.data)
                .then(tasks => dispatch(findTasks(tasks)))
        }
    }
}

export const searchAllTasks = (busqueda, valor) => dispatch => {
    if (valor === undefined) {
        return Axios.get("/api/task/allTasks")
            .then(res => res.data)
            .then(allTasks => dispatch(findAllTasks(allTasks)))
    } else if (valor === 1) {
        return Axios.get(`/api/task/allTasks?s=${busqueda}`)
                .then(res => res.data)
                .then(allTasks => dispatch(findAllTasks(allTasks)))
    } else if (valor === 2) {
        return Axios.get(`/api/task/allTasks?t=${busqueda}`)
                .then(res => res.data)
                .then(allTasks => dispatch(findAllTasks(allTasks)))
    }
}

export const searchTasksList = () => dispatch => {
    return Axios.get("/api/task/tasksList")
        .then(res => res.data)
        .then(tasksList => dispatch(findTasksList(tasksList)))
}

export const searchSingleTaskRecruit = (taskId) => dispatch => {
    return Axios.get(`/api/task/${taskId}`)
        .then(res => res.data)
        .then(task => dispatch(singleTaskRecruit(task)))
}

export const searchTasksRecruits = (recruitId) => dispatch => {
    return Axios.get(`/api/task/recruit/${recruitId}`)
        .then(res => res.data)
        .then(tasks => dispatch(findTasksRecruits(tasks)))
}

export const createTaskRecruit = (obj) => dispatch => {
    console.log("aqui el froooooooooooont", obj);

    return Axios.post("/api/taskRecruit", obj)
        .then(res => res.data)
        .then(nuevaTaskRec => dispatch(searchTasksRecruits(nuevaTaskRec.recruitId)))
}

export const deleteTaskRecruit = (taskRecruitId, recruitId) => dispatch => {
    return Axios.delete(`/api/taskRecruit/${taskRecruitId}`)
        .then(() => dispatch(searchTasksRecruits(recruitId)))
}

export const setErrorFields = () => dispatch =>{
    dispatch(setError())
}