import { CREATE_TASK, SEARCH_TASKS } from "../constants/index";

const initialTaskState = {
    task: {},
    tasks: []
}
export default function (state = initialTaskState, action) {
    switch (action.type) {
        case CREATE_TASK:
            return Object.assign({}, state, { task: action.task })
        case SEARCH_TASKS:
            return Object.assign({}, state, { tasks: action.tasks })
        default:
            return state;
    }
}