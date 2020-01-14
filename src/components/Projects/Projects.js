import React from 'react';
import '../Projects/Projects.css';

import SisterCity from '../../images/sister-city.png';
import AceHotel from '../../images/ace-hotel.png';
import DiabeticStrips from '../../images/diabetic-strips.png';
import LastLight from '../../images/last-light.png';
import MDLL from '../../images/mdll.png';
import BarMarilou from '../../images/bar-marilou.png';
import Breslin from '../../images/breslin.png';
import Caps from '../../images/caps.png';

const Projects = props => (
    <div className="project">
        <div className="project__item project__item--1">
            <a href="https://sistercitynyc.com/" target="_blank" rel="noopener noreferrer"><img src={SisterCity} alt="sister city" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://sistercitynyc.com/" target="_blank">Sister City</a></h3>
            <p className="project__item--skills">Vue / Python</p>
            <p className="project__item--description">Hotel in Soho New York. I worked on information updates, CSS enhancements and bug fixes.</p>
        </div>
        <div className="project__item project__item--2">
            <a href="https://www.acehotel.com/" target="_blank" rel="noopener noreferrer"><img src={AceHotel} alt="ace hotel" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.acehotel.com/locations/" target="_blank">Ace Hotel</a></h3>
            <p className="project__item--skills">Vue / Django / Wagtail</p>
            <p className="project__item--description">Boutique hotel chain. I worked on CSS enhancements, Updates, Bug Fixes, and SEO. Also built out pages in the Wagtail admin.</p>
        </div>
        <div className="project__item project__item--3">
            <a href="https://www.diabeticteststrips4cash.com/" target="_blank" rel="noopener noreferrer"><img src={DiabeticStrips} alt="db medical supplies" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.diabeticteststrips4cash.com/" target="_blank">DB Medical Supplies</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML / Squarespace</p>
            <p className="project__item--description">Freelance project. I collaborated with a Graphic Designer. Using custom code blocks within the Squarespace framework.</p>
        </div>
        <div className="project__item project__item--4">
            <a href="https://www.barmarilou.com/" target="_blank" rel="noopener noreferrer"><img src={BarMarilou} alt="bar marilou" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.barmarilou.com/" target="_blank">Bar Marilou</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML / Squarespace</p>
            <p className="project__item--description">Restaurant in New Orleans. I collaborated with a graphic designer and used custom code blocks within the Squarespace framework.</p>
        </div>
        <div className="project__item project__item--5">
            <a href="https://www.lastlight.nyc/" target="_blank" rel="noopener noreferrer"><img src={LastLight} alt="last light" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.lastlight.nyc/" target="_blank">Last Light</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML / Squarespace</p>
            <p className="project__item--description">Restaurant in Soho New York. I collaborated with a graphic designer and used custom code blocks within the Squarespace framework.</p>
        </div>
        <div className="project__item project__item--6">
            <a href="https://maisondelaluz.com/" target="_blank" rel="noopener noreferrer"><img src={MDLL} alt="maison de la luz" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://maisondelaluz.com/" target="_blank">Maison De La Luz</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML / Wordpress</p>
            <p className="project__item--description">Hotel in New Orleans. I collaborated with a graphic designer and added css and php enhancements within the Wordpress framework.</p>
        </div>
        <div className="project__item project__item--7">
            <a href="https://www.breslinnyc.com/" target="_blank" rel="noopener noreferrer"><img src={Breslin} alt="breslin" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.breslinnyc.com/" target="_blank">The Breslin</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML / Squarespace</p>
            <p className="project__item--description">Restaurant in the NYC Flatiron district. I collaborated with a graphic designer and built the site using custom code blocks within the Squarespace framework.</p>
        </div>
        <div className="project__item project__item--8">
            <a href="https://brentahrens1.github.io/capitals-slot-machine/" target="_blank" rel="noopener noreferrer"><img src={Caps} alt="slot machine" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://brentahrens1.github.io/capitals-slot-machine/" target="_blank">Slot Machine</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">This was one of my project's for the Web Development Immersive class I took at General Assembly.</p>
        </div>
    </div>
)

export default Projects