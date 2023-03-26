import * as types from "../constants/AuthActionTypes"
import * as api from "../apis/authApi"

export const login = (username, password) => async dispatch => {
    try {
        dispatch({type: types.LOGIN_REQUEST})

        const response = await api.login(username, password)
        localStorage.setItem("token", JSON.stringify(response))
        
        dispatch({type: types.LOGIN_SUCCESS, profile: response})

    } catch (error) {
        dispatch({type: types.LOGIN_FAILURE, error})
    }
}
export const authentication = () => async dispatch => {
    try {
        dispatch({type: types.LOGIN_REQUEST})
        const response = localStorage.getItem("token")
        if(!response){
            dispatch({type: types.LOGIN_FAILURE, error: {message: `Unauthorized.`}})
            return
        }
        dispatch({type: types.LOGIN_SUCCESS, profile: JSON.parse(response)})

    } catch (error) {
        dispatch({type: types.LOGIN_FAILURE, error})
    }
}
export const logout = () => async dispatch => {
    try {
        dispatch({type: types.LOGOUT_REQUEST})

        localStorage.removeItem("token")
        
        dispatch({type: types.LOGOUT_SUCCESS, profile: null})

    } catch (error) {
        dispatch({type: types.LOGOUT_FAILURE, error})
    }
}