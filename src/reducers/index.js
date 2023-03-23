import { combineReducers } from "redux";
import about from "./aboutReducer"
import auth from "./authReducer"
import post from "./postReducer"

const reducer = combineReducers({ about, auth, post })

export default reducer