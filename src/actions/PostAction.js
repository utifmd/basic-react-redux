import * as types from "../constants/PostActionType"
import * as api from "../apis/postsApi"

export const saveArticle = (article) => async dispatch => {
    try {
        dispatch({type: types.SAVE_ARTICLE_REQUEST})
        const response = await api.savePosts(article)
        dispatch({type: types.SAVE_ARTICLE_SUCCESS, article: response})
    } catch (error) {
        dispatch({type: types.SAVE_ARTICLE_FAILURE, error})
    }
}

export const updateArticle = (article) => async dispatch => {
    try {
        dispatch({type: types.UPDATE_ARTICLE_REQUEST})
        const response = await api.updatePosts(article.id, article)
        dispatch({type: types.UPDATE_ARTICLE_SUCCESS, article: response})
    } catch (error) {
        dispatch({type: types.UPDATE_ARTICLE_FAILURE, error})
    }
}

export const getArticles = () => async dispatch => {
    try {
        dispatch({type: types.GET_ARTICLES_REQUEST})
        const response = await api.getPosts()
        dispatch({type: types.GET_ARTICLES_SUCCESS, articles: response})
    } catch (error) {
        dispatch({type: types.GET_ARTICLES_FAILURE, error})
    }
}