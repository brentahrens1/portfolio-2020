import React from 'react';
import "../SideDrawer/SideDrawer.css";

const sideDrawer = props => {
        let  drawerClasses = 'side-drawer'
        if (props.show) {
            drawerClasses = 'side-drawer open'
        }
    return (
        <nav className={drawerClasses}>
            <div className="close" onClick={props.click}>&#10005;</div>
            <ul> 
                <li><a href="https://github.com/brentahrens1" target="_blank">Git Hub</a></li>
                <li><a href="#">Resume PDF</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;