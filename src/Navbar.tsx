import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to="/" className="home">Home</Link>
            <div className="menu" onClick={() => { setMenuOpen(!menuOpen); }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
