import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <h1>Book-Swap</h1>
            <nav>
                <ul>
            
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            

            <Outlet />
        </>
    )
};

export default Layout;