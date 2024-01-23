
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <img src="../img/logo.png" alt="Admin" />
            <h1>Book-Swap</h1>
            <div className={`navbar-toggler`} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={menuOpen ? 'active' : ''}>
                <li>Home</li>
                <li>Oferts</li>
                <li>The  best sellers</li>
                <li>Identify yourself</li>
            </ul>
            <div>
                <img src="../img/Admi.jpg" alt="Admin" />
                <span>Admin</span>
                <img src="../img/OIP.png" alt="Cart" />
            </div>
        </nav>
    );
};

export default Navbar;