import React from 'react';
import "../About/About.css";

import Profile from "../../images/profile-pic.png";

const About = props => (
    <div className="about">
        <div className="about-overlay">
            <div className="about-info">
                <img className="about-profile" src={Profile} alt="profile"></img>
                <h1 className="about-name">Brent Ahrens</h1>
                <h2 className="about-title">Front End Web Developer</h2>
                <h4 className="about-skills">React | Vue | Javascript | CSS3 | SASS | SCSS | Flexbox | CSS Grid | HTML5 | Node.js | NPM | RESTful APIs | BEM | Github | SEO | Wordpress | Squarespace | Wagtail | Google Analytics | Gatsby | Command Line | CRUD | Agile</h4>
                <p className="about-description">I’m a passionate, self-motivated front end web developer who thrives in demanding and dynamic roles that leverage my affinity for cutting edge technology and collaboration.</p>
            </div>
        </div>
    </div>
)

export default About;