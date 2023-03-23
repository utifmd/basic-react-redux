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