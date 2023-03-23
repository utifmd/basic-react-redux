import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (<div>
        <header style={{padding: '8px', backgroundColor: '#f2f2f2'}}>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">About</Link></span>
            <span><Link to="/contact">Contact Us</Link></span>
            <span><Link to="/posts">Post</Link></span>
        </header>
        <Outlet />
    </div>)
}
export default Dashboard