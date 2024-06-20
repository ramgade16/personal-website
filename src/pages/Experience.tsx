import React from 'react';
import './Experience.css';
// @ts-ignore
import experience_data from '../assets/experience.js';

type Work = {
    w_no: number;
    w_name: string;
    w_img: string;
};

export default function Experience() {
    return (
        <div id='experience' className='experience'>
            <div className="experience-title">
                <h1>Experience</h1>
            </div>
            <div className="experience-container">
                {experience_data.map((work: Work, index: number) => (
                    <img key={index} src={work.w_img} alt={work.w_name}></img>
                ))}
            </div>
        </div>
    );
}