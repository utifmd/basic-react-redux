import { connect } from "react-redux";
import HomeView from "../components/home/HomeView"

const mapStateToProps = (state) => ({
    publishedPost: {...state.post,
        articles: state.post.articles.filter(article => article.status === true)
    }
})
const container = connect(mapStateToProps, null)

export default container(HomeView)