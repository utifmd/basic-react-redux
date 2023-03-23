import * as types from "../constants/PostActionType"

const initialState = {
    articles: [],
    loading: false,
    error: null
}
export default function post(state = initialState, action) {
    switch (action.type) {

        case types.GET_ARTICLES_REQUEST:
            return {...state, loading: true}

        case types.GET_ARTICLES_FAILURE:
            return {...state, loading: false, error: action.error}

        case types.GET_ARTICLES_SUCCESS:
            return {...state, loading: false, articles: action.articles}

            
        case types.SAVE_ARTICLE_REQUEST:
            return {...state, loading: true}

        case types.SAVE_ARTICLE_FAILURE:
            return {...state, loading: false, error: action.error}

        case types.SAVE_ARTICLE_SUCCESS:
            const { title, content } = action.article
            const latestId = state.articles.reduce((id, current) => 
                Math.max(id, current.id), -1) +1
                
            let mArticle = {
                id: latestId, 
                title,
                content,
                status: false
            }
            return {...state, loading: false, 
                articles: state.articles.concat([mArticle])
            }
    
        case types.UPDATE_ARTICLE_REQUEST:
            return {...state, loading: true}

        case types.UPDATE_ARTICLE_FAILURE:
            return {...state, loading: false, error: action.error}

        case types.UPDATE_ARTICLE_SUCCESS:
            return {...state, loading: false, 
                articles: state.articles.map(mArticle => {
                    if (action.article.id === mArticle.id) mArticle = action.article
                    return mArticle
                })
            }
    
        default:
            return state
    }
}