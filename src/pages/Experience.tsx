import React from 'react';
import './Experience.css';
import experience_data from '/src/assets/experience.js';

export default function Experience() {
    return (
        <div id='experience' className='experience'>
            <div className="experience-title">
                <h1>Experience</h1>
            </div>
            <div className="experience-container">
                {experience_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt=""></img>
                })}
            </div>
        </div>
    );
}