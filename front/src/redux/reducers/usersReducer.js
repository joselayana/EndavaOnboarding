import { CREATE_USER} from "../constants/index"

const initialUserState = {
    user: {},
}

export default function (state = initialUserState, action) {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {user: action.user})
        default:
            return state;
    }
}