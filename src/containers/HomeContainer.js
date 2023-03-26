import { connect } from "react-redux";
import { getArticles } from "../actions/PostAction"
import HomeView from "../components/home/HomeView"

const mapStateToProps = (state) => ({
    publishedPost: {...state.post,
        articles: state.post.articles.filter(article => article.status === true)
    }
})
const mapReducerToProps = ({
    getPublishedPosts: getArticles
})
const container = connect(mapStateToProps, mapReducerToProps)

export default container(HomeView)