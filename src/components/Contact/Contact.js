import React from 'react';
import '../Contact/Contact.css';

const Contact = props => (
    <div className="contact" id="contact-scroll">
        <h1 className="contact-title">Contact</h1>
        <h3 className="contact-location">Los Angeles, CA</h3>
        <h3 className="contact-email"><a href="mailto:brentholmesahrens@gmail.com">brentholmesahrens@gmail.com</a></h3>
        <h3 className="contact-phone"><a href="tel:301-606-3561">301.606.3561</a></h3>
        <h3 className="contact-social"><a href="https://www.linkedin.com/in/brenthahrens/" target="_blank">Linkedin</a></h3>
        <p><a href="#home">Back to the top</a></p>
    </div>
)

export default Contact