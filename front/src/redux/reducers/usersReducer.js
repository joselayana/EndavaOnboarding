import { CREATE_USER, USER_LOGOUT} from "../constants/index"

const initialUserState = {
    user: {},
}

export default function (state = initialUserState, action) {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {user: action.user})
        case USER_LOGOUT:
            return { ...state, user: {} }
        default:
            return state;
    }
}