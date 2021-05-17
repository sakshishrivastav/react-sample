import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    FETCH_AUTHUSER_REQUEST,
    FETCH_AUTHUSER_FAILURE,
    FETCH_AUTHUSER_SUCCESS
} from './authTypes'

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

export const loginRequestSuccess = token => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const loginRequestFailure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const fetchAuthUserRequest = () => {
    return {
        type: FETCH_AUTHUSER_REQUEST,
    }
}

export const fetchAuthUserSuccess = (user, token) => {
    return {
        type: FETCH_AUTHUSER_SUCCESS,
        payload: {user, token}
    }
}

export const fetchAuthUserFailure = error => {
    return {
        type: FETCH_AUTHUSER_FAILURE,
        payload: error
    }
}

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const login = ({email, password}) =>{
    return async (dispatch) =>{
        try {
            dispatch(loginRequest())
            const {data} = await axios('https://reqres.in/api/login', {
                method: 'POST',
                data: {
                    email,
                    password
                },
                headers: {'Content-Type': 'application/json'}
            })

            if(!data.token) {
                const err = {message:'NO UAT'};
                throw (err);
            }
            
            localStorage.setItem('_UAT', data.token);
            dispatch(loginRequestSuccess(data.token))
            dispatch(getAuthUser())
        } catch (error) {
            console.log(error);
            dispatch(loginRequestFailure(error.message ? error.message : error.response.data ));
        }
    }
}

export const logout = () =>{
    return (dispatch) =>{
        localStorage.removeItem('_UAT');
        dispatch(logoutSuccess())
    }
}

export const getAuthUser = () =>{
    return async dispatch =>{
        try {
            dispatch(fetchAuthUserRequest());
            const token = localStorage.getItem('_UAT');
            //TODO:check for expiry aswell
            if(!token) {
                const err = {message: 'NO UAT'};
                throw (err);
            }
            //can setup auth interceptors or headers here if needed
            const {data:user} = await axios(`https://reqres.in/api/users/4?token=${token}`);
            dispatch(fetchAuthUserSuccess(user, token));
            //can return a Promise resolve/reject to make it thenable
        } catch (error) {
            dispatch(fetchAuthUserFailure(error.message ? error.message : error.response.statusText))
        }
    }
}