import { useEffect } from "react"
import HomeList from "./HomeList"
import PropTypes from "prop-types"

const HomeView = ({publishedPost, getPublishedPosts}) => {
    const {loading, error, articles} = publishedPost
    
    useEffect(() => {
        getPublishedPosts()

    }, [getPublishedPosts])

    return (<>
        <h1>Home View</h1>
        { loading && <span>Loading...</span> }
        { error && <span style={{color: 'red'}}>{error.message || error}</span> }
        <HomeList articles={articles} />
    </>)
}
HomeView.prototype = {
    publishedPost: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    getPublishedPosts: PropTypes.func.isRequired
}
export default HomeView