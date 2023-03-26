import { connect } from "react-redux";
import { saveArticle, updateArticle, getArticles } from "../actions/PostAction"
import { logout } from "../actions/AuthActions"
import PostView from "../components/posts/PostsView";

const mapStateToProps = state => ({
    post: state.post
})
const mapReducerToProps = ({
    saveArticle, updateArticle, getArticles, logout
})
const container = connect(mapStateToProps, mapReducerToProps)

export default container(PostView)