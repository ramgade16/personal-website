import React from 'react';
import './Projects.css';
// @ts-ignore
import projects_data from '../assets/projects.js'; // Ensure the path is correct

type Project = {
    w_no: number;
    w_name: string;
    w_img: string;
};

export default function Projects() {
    return (
        <div id='projects' className='projects'>
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                {projects_data.map((work: Project, index: number) => {
                    return <img key={index} src={work.w_img} alt=""></img>
                })}
            </div>
        </div>
    );
}