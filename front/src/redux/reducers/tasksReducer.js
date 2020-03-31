import { SEARCH_TASKS, SINGLE_TASK_RECRUIT, SEARCH_ALL_TASKS, SEARCH_TASKS_LIST, SEARCH_TASKS_RECRUIT, SET_ERROR } from "../constants/index";

const initialTaskState = {
    tasks: [],
    tasksRecruit: [],
    allTasks: [],
    tasksList: [],
    selectedTask: {},
    errorFields: false
}
export default function (state = initialTaskState, action) {
    switch (action.type) {

        case SEARCH_TASKS:
            return Object.assign({}, state, { tasks: action.tasks })
        case SEARCH_ALL_TASKS:
            return Object.assign({}, state, { allTasks: action.allTasks })
        case SEARCH_TASKS_LIST:
            return Object.assign({}, state, { tasksList: action.tasksList })
        case SINGLE_TASK_RECRUIT:
            return Object.assign({}, state, { selectedTask: action.task })
        case SET_ERROR:
            state.errorFields = !state.errorFields
        case SEARCH_TASKS_RECRUIT:
            return Object.assign({}, state, { tasksRecruit: action.tasksRecruits })
        default:
            return state;
    }
}