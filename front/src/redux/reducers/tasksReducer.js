import { CREATE_TASK, SEARCH_TASKS, SINGLE_TASK_RECRUIT } from "../constants/index";

const initialTaskState = {
    task: {},
    tasks: [],
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
        default:
            return state;
    }
}