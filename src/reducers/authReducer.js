import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR 
} from "../types";

const initialState = {
    user: null,
    token: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: [...state.user, action.payload.user],
                token: [...state.token, action.payload.token]
            }
        case REGISTER_REQUEST: 
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: [...state.user, action.payload.user],
                error: null
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            }
        default: return state;
    }
}