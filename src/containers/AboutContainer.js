import { connect } from "react-redux"
import { getAuthor } from "../actions/AboutActions"
import AboutView from "../components/about/AboutView"

const mapStateToProps = (state) => ({ 
    about: state.about
})
const mapReducerToProps = ({ 
    getAuthor 
})
export default connect(
    mapStateToProps, mapReducerToProps
    
)(AboutView)