import Axios from "axios";
import { SEARCH_RECRUITS, CREATE_RECRUIT } from "../constants";

export const setTask = (recruit) => ({
    type: CREATE_RECRUIT,
    recruit
})

export const findRecruits = (recruits) => ({
    type: SEARCH_RECRUITS,
    recruits
})

export const searchRecruits = () => dispatch => {
    return Axios.get("/api/recruit/")
        .then(res => res.data)
        .then(recruits => dispatch(findRecruits(recruits)))
}

export const createRecruit = (recruit) => dispatch => {
    return Axios.post("/api/recruit/", recruit)
        .then(res => res.data)
        .then(newRecruit => dispatch(setTask(newRecruit)))
}

