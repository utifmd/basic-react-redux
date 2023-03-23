import * as types from "../constants/AboutActionTypes"
import * as api from "../apis/authApi"

export const getAuthor = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_AUTHOR_REQUEST })
        const response = await api.getAuthor("utifmd")
        dispatch({ type: types.GET_AUTHOR_SUCCESS, author: response })

    } catch (error) {
        dispatch({ type: types.GET_AUTHOR_FAILURE, error })
    }
}