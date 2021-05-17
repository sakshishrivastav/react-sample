import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import taskReducer from './task/taskReducer';


const rootReducer = combineReducers({
    tasks: taskReducer,
    auth: authReducer
})


export default rootReducer;