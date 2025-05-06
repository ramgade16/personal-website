"use client"

import { useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import "./Navbar.css"
// Import the image
import profilePic from "/images/Ram_Gade.jpg"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Function to close the dropdown menu
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav>
      <a href="#home" className="home-link" onClick={closeMenu}>
        <img src={profilePic || "/placeholder.svg"} alt="Profile Photo" className="profile-pic" />
      </a>
      <div className="nav-menu">
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ramshreyas-gade/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:ramgade@umich.edu" onClick={closeMenu}>
          <FaEnvelope />
        </a>
        <a href="https://github.com/ramgade16" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  )
}
