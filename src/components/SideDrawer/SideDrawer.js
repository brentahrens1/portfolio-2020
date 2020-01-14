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
                <li><a href="#">Projects</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Git Hub</a></li>
                <li><a href="#">Resume PDF</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;