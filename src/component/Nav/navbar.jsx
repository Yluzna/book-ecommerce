
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
                <li>Home</li>
                <li>Oferts</li>
                <li>The best sellers</li>
                <li>Identify yourself</li>
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