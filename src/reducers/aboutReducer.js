import * as types from "../constants/AboutActionTypes"

const initialState = {
    author: null,
    loading: false,
    error: null
}
export default function about(state = initialState, action) {
    switch (action.type) {
        
        case types.GET_AUTHOR_SUCCESS:
            return { ...initialState, author: action.author }

        case types.GET_AUTHOR_REQUEST:
            return { ...state, loading: true }
            
        case types.GET_AUTHOR_FAILURE:
            return { ...state, loading: false, error: action.error }
    
        default:
            return state
    }
}