import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="home">Home</Link>
                <ul>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
}