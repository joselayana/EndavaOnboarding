import { CREATE_TASK, SEARCH_TASKS, SINGLE_TASK_RECRUIT, SEARCH_TASKS_RECRUIT } from "../constants/index";

const initialTaskState = {
    task: {},
    tasks: [],
    tasksRecruit: [],
    selectedTask: {}
}
export default function (state = initialTaskState, action) {
    switch (action.type) {
        case CREATE_TASK:
            return Object.assign({}, state, { task: action.task })
        case SEARCH_TASKS:
            return Object.assign({}, state, { tasks: action.tasks })
        case SINGLE_TASK_RECRUIT:
            return Object.assign({}, state, { selectedTask: action.task })
        case SEARCH_TASKS_RECRUIT:
            return Object.assign({}, state, { tasksRecruit: action.tasksRecruits })
        default:
            return state;
    }
}