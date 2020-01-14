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
            <a href="https://sistercitynyc.com/" target="_blank"><img src={SisterCity} alt="test site" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://sistercitynyc.com/" target="_blank">Sister City</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">slfj sljdslfjdsl lsdjfldsjflk slkfjdslfjl sldjfdlskjf lsdjfldskj lksdjflsdjfdslkfjdsljf lsdjflkdj </p>
        </div>
        <div className="project__item project__item--2">
            <a href="https://www.acehotel.com/" target="_blank"><img src={AceHotel} alt="test site" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.acehotel.com/locations/" target="_blank">Ace Hotel</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">slfj sljdslfjdsl lsdjfldsjflk slkfjdslfjl sldjfdlskjf lsdjfldskj lksdjflsdjfdslkfjdsljf lsdjflkdj </p>
        </div>
        <div className="project__item project__item--3">
            <a href="https://www.diabeticteststrips4cash.com/" target="_blank"><img src={DiabeticStrips} alt="test site" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.diabeticteststrips4cash.com/" target="_blank">DB Medical Supplies</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">slfj sljdslfjdsl lsdjfldsjflk slkfjdslfjl sldjfdlskjf lsdjfldskj lksdjflsdjfdslkfjdsljf lsdjflkdj </p>
        </div>
        <div className="project__item project__item--4">
            <a href="https://www.barmarilou.com/" target="_blank"><img src={BarMarilou} alt="test site" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.barmarilou.com/" target="_blank">Bar Marilou</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">slfj sljdslfjdsl lsdjfldsjflk slkfjdslfjl sldjfdlskjf lsdjfldskj lksdjflsdjfdslkfjdsljf lsdjflkdj </p>
        </div>
        <div className="project__item project__item--5">
            <a href="https://www.lastlight.nyc/" target="_blank"><img src={LastLight} alt="test site" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.lastlight.nyc/" target="_blank">Last Light</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">slfj sljdslfjdsl lsdjfldsjflk slkfjdslfjl sldjfdlskjf lsdjfldskj lksdjflsdjfdslkfjdsljf lsdjflkdj </p>
        </div>
        <div className="project__item project__item--6">
            <a href="https://maisondelaluz.com/" target="_blank"><img src={MDLL} alt="test site" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://maisondelaluz.com/" target="_blank">Maison De La Luz</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">slfj sljdslfjdsl lsdjfldsjflk slkfjdslfjl sldjfdlskjf lsdjfldskj lksdjflsdjfdslkfjdsljf lsdjflkdj </p>
        </div>
        <div className="project__item project__item--7">
            <a href="https://www.breslinnyc.com/" target="_blank"><img src={Breslin} alt="test site" className="project__item--img"></img></a>
            <h3 className="project__item--title"><a href="https://www.breslinnyc.com/" target="_blank">The Breslin</a></h3>
            <p className="project__item--skills">Javascript / CSS / HTML</p>
            <p className="project__item--description">slfj sljdslfjdsl lsdjfldsjflk slkfjdslfjl sldjfdlskjf lsdjfldskj lksdjflsdjfdslkfjdsljf lsdjflkdj </p>
        </div>
    </div>
)

export default Projects