import { Navigate } from "react-router-dom"

const AuthScope = ({children, rejectTo}) => {
    if (!localStorage.getItem("token")) {
        return <Navigate to={rejectTo} replace />
    }
    return children
}
export default AuthScope