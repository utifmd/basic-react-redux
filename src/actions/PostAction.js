import * as types from "../constants/PostActionType"

export const saveArticle = (article) => async dispatch => {
    try {
        dispatch({type: types.SAVE_ARTICLE_REQUEST})
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(article)
            }, 1000);
        })
        dispatch({type: types.SAVE_ARTICLE_SUCCESS, article: response})
    } catch (error) {
        dispatch({type: types.SAVE_ARTICLE_FAILURE, error})
    }
}

export const updateArticle = (article) => async dispatch => {
    try {
        dispatch({type: types.UPDATE_ARTICLE_REQUEST})
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(article)
            }, 1000);
        })
        dispatch({type: types.UPDATE_ARTICLE_SUCCESS, article: response})
    } catch (error) {
        dispatch({type: types.UPDATE_ARTICLE_FAILURE, error})
    }
}