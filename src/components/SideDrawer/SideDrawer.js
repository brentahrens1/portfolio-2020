import React from 'react';
import "../SideDrawer/SideDrawer.css";
import PDF from "../../PDF/BrentResume.docx";

const sideDrawer = props => {
        let  drawerClasses = 'side-drawer'
        if (props.show) {
            drawerClasses = 'side-drawer open'
        }
    return (
        <nav className={drawerClasses}>
            <div className="close" onClick={props.click}>&#10005;</div>
            <ul> 
                <li><a href="https://github.com/brentahrens1" target="_blank" rel="noopener noreferrer">Git Hub</a></li>
                <li><a href={PDF}>Resume PDF</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;