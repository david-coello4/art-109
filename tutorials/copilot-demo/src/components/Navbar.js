import React from 'react';
import './Navbar.css'; // Assuming you have a separate CSS file for Navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Social Media Feed</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#logout">Logout</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;