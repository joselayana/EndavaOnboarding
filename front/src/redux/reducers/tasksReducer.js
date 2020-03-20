import { CREATE_TASK } from "../constants/index";

const initialTaskState = {
    task: {}
}
export default function (state = initialTaskState, action) {
    switch (action.type) {
        case CREATE_TASK:
            return Object.assign({}, state, { task: action.task })
        default:
            return state;
    }
}