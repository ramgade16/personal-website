import React from 'react';
import './Projects.css';
import projects_data from '/src/assets/projects.js';

export default function Projects() {
    return (
        <div id='projects' className='projects'>
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                {projects_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt=""></img>
                })}
            </div>
        </div>
    );
}