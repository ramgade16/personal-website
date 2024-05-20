import React from 'react';
import './About.css';

export default function About() {
    return (
        <div id='about' className="about-background">
            <div className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <p>Hey, my name is Ram Gade and I am currently a sophomore majoring
                            in Data Science with minors in Math and Business at the University of Michigan!</p>
                        <p>I am interested in software development, specifically the relevant intersection
                            of technology and business. As an avid problem solver, I am intrigued by the integration
                            of high-level math concepts into predictive models using modern software technologies.</p>
                        <p>Outside of school, I am originally from the Huntsville, AL metro area. Some of my hobbies
                            include playing soccer/basketball, watching football, building model rockets,
                            hanging out with family/friends, travelling, and cooking!</p>
                    </div>
                    <div className="about-right">
                        <img src="src/images/Website Collage.png" alt="Description" ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
