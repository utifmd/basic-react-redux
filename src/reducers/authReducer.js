import * as types from "../constants/AuthActionTypes"

const initialState = {
    profile: null,
    loading: false,
    error: null
}
export default function auth(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {...state, loading: true}

        case types.LOGIN_FAILURE:
            return {...state, loading: false, error: action.error}

        case types.LOGIN_SUCCESS:
            return {...initialState, loading: false, profile: action.profile}
    
        default:
            return state
    }
}