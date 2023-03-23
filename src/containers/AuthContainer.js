import { connect } from "react-redux";
import { login } from "../actions/AuthActions"
import AuthView from "../components/auth/AuthView"

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapReducerToProps = ({ login })

export default connect(mapStateToProps, mapReducerToProps)(AuthView)