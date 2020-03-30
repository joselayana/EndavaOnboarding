import Axios from "axios";
import { SEARCH_RECRUITS, CREATE_RECRUIT, SINGLE_RECRUIT } from "../constants";

export const setRecruit = (recruit) => ({
    type: CREATE_RECRUIT,
    recruit
})

export const findRecruits = (recruits) => ({
    type: SEARCH_RECRUITS,
    recruits
})

export const singleRecruit = (recruit) => ({
    type: SINGLE_RECRUIT,
    recruit
})

export const searchRecruits = () => dispatch => {
    return Axios.get("/api/recruit/")
        .then(res => res.data)
        .then(recruits => dispatch(findRecruits(recruits)))
}

export const createRecruit = (recruit) => dispatch => {
    return Axios.post("/api/recruit/", recruit)
        .then(res => res.data)
        .then(newRecruit => dispatch(setRecruit(newRecruit)))
}

export const searchSingleRecruit = (recruitId) => dispatch => {
    return Axios.get(`/api/recruit/${recruitId}`)
        .then(res => res.data)
        .then(task => dispatch(singleRecruit(task)))
}

export const updateRecruit = (objRecruit) => dispatch => {
    return Axios.put(`/api/recruit/edit/${objRecruit.recruitId}`, objRecruit)
        .then(res => res.data)
        .then(recruit => dispatch(setRecruit(recruit)))
}
