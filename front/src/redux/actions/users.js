import axios from "axios"
import { CREATE_USER, SEARCH_USERS, CHANGE_PROFILE } from "../constants/index"

export const setUser = (user) => ({
    type: CREATE_USER,
    user
});

export const allUsers = (users) => ({
    type: SEARCH_USERS,
    users
})

export const createUser = (user) => dispatch => {
    return axios.post(`/api/user/register`, user)
        .then(data => data.data)
        .then(user => dispatch(setUser(user)))
}

export const fetchUsers = () => dispatch => {
    return axios.get("/api/user/allUsers")
        .then(res => res.data)
        .then(users => dispatch(allUsers(users)))
}

export const changeProfile = (idUser, state) => dispatch => {
    return axios.put(`/api/user/changeProfile/${idUser}`, { state })
        .then(res => res.data)
        .then(users => dispatch(allUsers(users)))

}