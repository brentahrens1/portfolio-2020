import React from 'react';
import '../Projects/Projects.css';

import SisterCity from '../../images/sister-city.png';
import AceHotel from '../../images/ace-hotel.png';
import DiabeticStrips from '../../images/diabetic-strips.png';
import LastLight from '../../images/last-light.png';
import MDLL from '../../images/mdll.png';
import BarMarilou from '../../images/bar-marilou.png';
import Breslin from '../../images/breslin.png';

const Projects = props => (
    <div className="project">
        <div className="project__item project__item--1">
            <a href="https://www.acehotel.com/" target="_blank" rel="noopener noreferrer"><img src={AceHotel} alt="ace hotel" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.acehotel.com/locations/" target="_blank" rel="noopener noreferrer">Ace Hotel</a></h3>
            <p className="project__item--skills"><i>Vue / Django / Wagtail</i></p>
            <p className="project__item--description">A chain of boutique hotels with locations across the country and abroad. I build and manage property sites in the Wagtail admin and regularly implement CSS enhancements, content updates, bug fixes and SEO improvements.</p>
        </div>
        <div className="project__item project__item--2">
            <a href="https://sistercitynyc.com/" target="_blank" rel="noopener noreferrer"><img src={SisterCity} alt="sister city" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://sistercitynyc.com/" target="_blank" rel="noopener noreferrer">Sister City</a></h3>
            <p className="project__item--skills"><i>Vue / Python</i></p>
            <p className="project__item--description">A Boutique hotel in Lower East Side NYC. I work on updating the content, CSS enhancements, and bug fixes. </p>
        </div>
        <div className="project__item project__item--3">
            <a href="https://www.breslinnyc.com/" target="_blank" rel="noopener noreferrer"><img src={Breslin} alt="breslin" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.breslinnyc.com/" target="_blank" rel="noopener noreferrer">The Breslin</a></h3>
            <p className="project__item--skills"><i>Javascript / CSS / HTML / Squarespace</i></p>
            <p className="project__item--description">A famed Michelin gastro pub in New York City. In collaboration with our design team, I built the site using custom code blocks within the Squarespace framework.</p>
        </div>
        <div className="project__item project__item--4">
            <a href="https://maisondelaluz.com/" target="_blank" rel="noopener noreferrer"><img src={MDLL} alt="maison de la luz" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://maisondelaluz.com/" target="_blank" rel="noopener noreferrer">Maison De La Luz</a></h3>
            <p className="project__item--skills"><i>Javascript / CSS / HTML / Wordpress</i></p>
            <p className="project__item--description">A luxury hotel in New Orleans. In collaboration with our design team, I built the site using custom code blocks within the Wordpress framework.</p>
        </div>
        <div className="project__item project__item--5">
            <a href="https://www.lastlight.nyc/" target="_blank" rel="noopener noreferrer"><img src={LastLight} alt="last light" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.lastlight.nyc/" target="_blank" rel="noopener noreferrer">Last Light</a></h3>
            <p className="project__item--skills"><i>Javascript / CSS / HTML / Squarespace</i></p>
            <p className="project__item--description">A rooftop bar in the Lower East Side. In collaboration with our design team, I built the site using custom code blocks within the Squarespace framework.</p>
        </div>
        <div className="project__item project__item--6">
            <a href="https://www.barmarilou.com/" target="_blank" rel="noopener noreferrer"><img src={BarMarilou} alt="bar marilou" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.barmarilou.com/" target="_blank" rel="noopener noreferrer">Bar Marilou</a></h3>
            <p className="project__item--skills"><i>Javascript / CSS / HTML / Squarespace</i></p>
            <p className="project__item--description">A spirited cocktail bar in the heart of New Orleans. In collaboration with our design team, I built the site using custom code blocks within the Squarespace framework.</p>
        </div>
        <div className="project__item project__item--7">
            <a href="https://www.diabeticteststrips4cash.com/" target="_blank" rel="noopener noreferrer"><img src={DiabeticStrips} alt="db medical supplies" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.diabeticteststrips4cash.com/" target="_blank" rel="noopener noreferrer">DB Medical Supplies</a></h3>
            <p className="project__item--skills"><i>Javascript / CSS / HTML / Squarespace</i></p>
            <p className="project__item--description">A freelance project for a Florida based company that buys unused diabetic test strips. I built the site using custom code blocks within the Squarespace framework.</p>
        </div>
    </div>
)

export default Projects