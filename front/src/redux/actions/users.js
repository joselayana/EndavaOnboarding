import axios from "axios"
import { CREATE_USER } from "../constants/index"

export const setUser = (user) => ({
    type: CREATE_USER,
    user
});

export const createUser = (user) => dispatch => {
    return axios.post(`/api/user/register`, user)
        .then(data => data.data)
        .then(user => dispatch(setUser(user)))
}