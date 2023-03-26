import PostFormView from "./PostFormView"
import PostListView from "./PostListView"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PostView = ({post, saveArticle, updateArticle, getArticles, logout}) => {
    const {articles, loading, error} = post
    const navigate = useNavigate()

    useEffect(() => {
        getArticles()
    
    }, [getArticles])

    const onLogout = () => {
        logout()
        navigate('/auth', {replace: true})
    }

    return (<>
        <h1>Posts View</h1>
        <PostListView 
            articles={articles} 
            updateArticle={updateArticle} />
    
        { error && <p style={{color: 'red'}}><span>{error.message || error}</span></p> }
        <PostFormView 
            saveArticle={saveArticle} 
            loading={loading}/>
        
        <button onClick={onLogout}>Sign out</button>
    </>)
}
PostView.prototype = {
    post: PropTypes.object.isRequired,
    saveArticle: PropTypes.func.isRequired,
    updateArticle: PropTypes.func.isRequired,
    getArticles: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}
export default PostView