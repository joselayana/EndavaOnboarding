import { combineReducers } from 'redux';
import loginReducer from "./loginReducer";
import userReducer from './usersReducer';
import tasksReducer from "./tasksReducer";
import recruitsReducer from "./recruitsReducer"


export default combineReducers({
    login: loginReducer,
    user: userReducer,
    task: tasksReducer,
    recruit: recruitsReducer
});