import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (<>
        <div className="relative min-h-screen">
            <nav className="fixed top-0 left-0 w-64 h-full bg-sky-200">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/posts">Post</Link></li>
            </nav>
            <section className="ml-64 p-3">
                <Outlet />
            </section>
        </div>
    </>)
}
export default Dashboard