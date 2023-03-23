import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import Dashboard from "../components/Dashboard"
import AuthScope from "./AuthScope"
import { 
    HomeContainer, AboutContainer, AuthContainer, PostContainer, ContactContainer 

} from "../containers"

const router = createRoutesFromElements(
    <Route 
        path="/" 
        element={<Dashboard />}
        errorElement={<h1>404 Not found</h1>}>
        <Route index element={<HomeContainer />} />
        <Route path="/auth" element={<AuthContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/posts" element={
            <AuthScope rejectTo="/auth"><PostContainer /></AuthScope>} />
        <Route path="/contact" element={<ContactContainer />} />
    </Route>
)
export default createBrowserRouter(router)