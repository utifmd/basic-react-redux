import { connect } from "react-redux";
import { saveArticle, updateArticle } from "../actions/PostAction"
import PostView from "../components/posts/PostsView";

const mapStateToProps = state => ({
    post: state.post
})
const mapReducerToProps = ({
    saveArticle, updateArticle
})
const container = connect(mapStateToProps, mapReducerToProps)

export default container(PostView)