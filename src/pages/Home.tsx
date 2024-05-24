import React, { useEffect } from 'react';
import './Home.css';
import Typed from 'typed.js';

export default function Home() {
    useEffect(() => {
        const typed = new Typed(".auto-type", {
            strings: ["Student at the University of Michigan.", "Data Science Major.", "Sports Enthusiast.", "Model Rocket Builder.", "Tropical Traveller.", "Cook.",],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    // Add class to body tag
    useEffect(() => {
        document.body.classList.add('home-background');

        return () => {
            document.body.classList.remove('home-background');
        };
    }, []);

    return (
        <div id="home" className="home-container">
            <div className="container">
                <h1>I'm a <span className="auto-type">Programmer</span></h1>
            </div>
            <div className="me-action">
                <a href="https://drive.google.com/file/d/1KH5sUW_xuYoCiZ3OfMc32HBalhQu9QlW/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-resume-link">
                    <div className="me-resume">Resume</div>
                </a>
            </div>
        </div>
    );
}