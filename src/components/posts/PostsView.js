import PostFormView from "./PostFormView"
import PostListView from "./PostListView"
import PropTypes from "prop-types"

const PostView = ({post, saveArticle, updateArticle}) => {
    const {articles, loading, error} = post
    return (<>
        <h1>Posts View</h1>
        <PostListView 
            articles={articles} 
            updateArticle={updateArticle} />
    
        { error && <p style={{color: 'red'}}><span>{error}</span></p> }
        <PostFormView 
            saveArticle={saveArticle} 
            loading={loading}/>
    </>)
}
PostView.prototype = {
    post: PropTypes.object.isRequired,
    saveArticle: PropTypes.func.isRequired,
    updateArticle: PropTypes.func.isRequired
}
export default PostView