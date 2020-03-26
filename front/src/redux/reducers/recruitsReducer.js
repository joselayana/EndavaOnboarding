import { SEARCH_RECRUITS, CREATE_RECRUIT } from "../constants/index";

const initialRecruitState = {
    recruits: [],
    newRecruit: []
}
export default function (state = initialRecruitState, action) {
    switch (action.type) {
        case SEARCH_RECRUITS:
            return Object.assign({}, state, { recruits: action.recruits })
        case CREATE_RECRUIT:
            return Object.assign({}, state, { newRecruit: action.recruit })
        default:
            return state;
    }
}