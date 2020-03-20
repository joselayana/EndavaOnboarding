import { combineReducers } from 'redux';
import loginReducer from "./loginReducer";
import userReducer from './usersReducer';
import tasksReducer from "./tasksReducer"


export default combineReducers({
    login: loginReducer,
    user: userReducer,
    task: tasksReducer,
});