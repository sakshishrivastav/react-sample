import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    FETCH_AUTHUSER_REQUEST,
    FETCH_AUTHUSER_FAILURE,
    FETCH_AUTHUSER_SUCCESS
} from './authTypes'

const initialState = {
    loading: false,
    token: null,
    error: null,
    isAuthenticated: null,
    user: null
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOGIN_REQUEST:
        case FETCH_AUTHUSER_REQUEST: 
            return { 
                ...state, 
                loading: true,
            }
        case LOGIN_SUCCESS:
            return { 
                ...state, 
                error: null,
                loading: false,
                token: payload,
            }

        case FETCH_AUTHUSER_SUCCESS: 
            return { 
                ...state, 
                error: null,
                loading: false,
                user: payload.user,
                token: payload.token,
                isAuthenticated: true
            }

        case LOGIN_FAILURE:
            return { 
                ...state, 
                error: payload,
                loading: false,
                token: null,
                isAuthenticated: false,
            }

        case FETCH_AUTHUSER_FAILURE: 
            return { 
                ...state, 
                error: payload,
                loading: false,
                user: null,
                isAuthenticated: false
            }

        case LOGOUT_SUCCESS:
            return { 
                ...state, 
                error: null,
                loading: false,
                token: null,
                user: null,
                isAuthenticated: false,
            }
    
        default:
            return state
        }
}

export default authReducer;
