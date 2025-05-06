"use client"

import type React from "react"
import { useEffect } from "react"
import Typed from "typed.js"
import "./Home.css"

const Home: React.FC = () => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Student at the University of Michigan.",
        "Data Science Major.",
        "Sports Enthusiast.",
        "Model Rocket Builder.",
        "Tropical Traveller.",
        "Cook.",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    // Use the imported image directly in the style
    <section id="home" className="home-container">
      <div className="container">
        <h1>
          I&apos;m a <span className="auto-type">Programmer</span>
        </h1>
      </div>

      <div className="me-action">
        <a
          href="https://drive.google.com/file/d/1KH5sUW_xuYoCiZ3OfMc32HBalhQu9QlW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="me-resume-link"
        >
          <div className="me-resume">Resume</div>
        </a>
      </div>
    </section>
  )
}

export default Home
