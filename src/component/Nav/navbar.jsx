import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <img src="../src/assets/img/logo.png" alt="Logo" />
            <h1>Book-Swap</h1>
            <div className={`navbar-toggler`} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={menuOpen ? 'active' : ''}>
            
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
            </ul>
            <div>
                <img src="../src/assets/img/Admi.png" alt="Admin" />
            </div>
            <div>
                <img src="../src/assets/img/OIP.jpg" alt="Cart" />
            </div>
        </nav>
    );
};

export default Navbar;