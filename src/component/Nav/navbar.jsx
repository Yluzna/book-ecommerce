import './navbar.css'

const Navbar = () => {
  return (

    <nav>
        <h1>Miweb</h1>
        <div>
            <ul>
                <li>home</li>
                <li>ofert</li>
                <li>los mejores libros</li>
                <li>admit</li>
            </ul>
        </div>
    </nav>
    // <nav className="navbar">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link to="/" className="navbar-logo">
    //       Your Logo
    //     </Link>
    //     <ul>
    //       <li>
    //         <Link to="/" className="navbar-link">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/products" className="navbar-link">
    //           The best sellet
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/Offerts" className="navbar-link">
    //           Offerts
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/Admin" className="navbar-link">
    //          Admin
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;