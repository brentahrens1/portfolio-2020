import React from 'react';
import "../About/About.css";

import Profile from "../../images/profile-pic.png";

const About = props => (
    <div className="about">
        <div className="about-overlay">
            <div className="about-info">
                <img className="about-profile" src={Profile} alt="profile picture"></img>
                <h1 className="about-name"><a href="mailto:brentholmesahrens@gmail.com" target="_blank">Brent Ahrens</a></h1>
                <h2 className="about-title">Front End Web Developer</h2>
                <h4 className="about-skills">Javascript | HTML | CSS | SASS | CSS Grid | FlexBox | Vue | React | Wordpress | Squarespace | Responsive</h4>
                <p className="about-description">My passion is aimed at creating meaningful projects that are rooted in sustainable community efforts. Aside from programming, I am also a musician and a long distance runner. I hope to use web development to help make knowledge more accessible and to improve the world we live in.</p>
            </div>
        </div>
    </div>
)

export default About;