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
                <h4 className="about-skills">React | Vue | Javascript | CSS3 | SASS | CSS Grid | FlexBox | HTML5 | Github | SEO | Wordpress | Squarespace | Wagtail | Google Analytics | Responsive Design | Pro Tools | Abelton Live</h4>
                <p className="about-description">I’m a front-end developer eager to work in a demanding and dynamic role that compliments my passion for building responsive and functional websites and leverages my extensive experience working in teams.</p>
            </div>
        </div>
    </div>
)

export default About;