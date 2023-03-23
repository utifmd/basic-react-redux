import PropTypes from "prop-types"

const PostListView = ({articles, updateArticle}) => (<>
    <ul>{ articles.map((article, i) => 
        <li key={i}>
            <input 
                name="status" 
                type="checkbox"
                defaultChecked={article.status === true}
                onChange={e => {
                    const { checked } = e.target
                    article.status = checked

                    updateArticle(article)
                }}/>
            {article.title}
        </li>
    )}</ul>
</>)
PostListView.prototype = {
    articles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    updateArticle: PropTypes.func.isRequired
}
export default PostListView