import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <a href="#home" className="home-link">  {/* Update this href as needed */}
                <img src="src/images/Ram_Gade.jpg" alt="Profile Photo" className="profile-pic" />
            </a>
            <div className="nav-menu">
                <ul className={menuOpen ? "open" : ""}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/ramshreyas-gade/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:ramgade@umich.edu"><FaEnvelope /></a>
                <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </nav>
    );
};