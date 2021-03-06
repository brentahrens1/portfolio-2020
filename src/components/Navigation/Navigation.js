import React from 'react'
import '../Navigation/Navigation.css';
import PDF from '../../PDF/BrentAhrens_Resume.pdf';

import DrawerToggle from '../SideDrawer/DrawerToggle'

const Navigation = props => (
    <header className="primary__container">
        <nav className="primary__nav">
            <div className="navbar-toggle__button">
                <DrawerToggle click={props.drawerToggleClickHandler} />
            </div>
            <div className="primary__logo primary_navigation-items"><a href="#contact">Let's Collaborate</a></div>
            <div className="spacer" />
            <div className="primary_navigation-items">
                <ul>
                    <li><a href="https://github.com/brentahrens1" target="_blank" rel="noopener noreferrer">Git Hub</a></li>
                    <li><a href={PDF} target="_blank" rel="noopener noreferrer">Resume PDF</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navigation;