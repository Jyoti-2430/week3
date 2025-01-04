import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Spotify Clone</a>
            </div>
            <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="/home">Home</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="/library">Your Library</a></li>
            </ul>
            <div className="navbar-profile">
                <a href="/profile">Profile</a>
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                {isMenuOpen ? 'Close' : 'Menu'}
            </button>
        </nav>
    );
};

export default Navbar;
