// src/pages/ContactUs.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css'; // Import the CSS file // Import the CSS file
import ContactImage from '../assets/contactpageimg.jpg'; // Import the image


const ContactUs = () => {
  return (
    <div className="ContactContainer">
      <img src={ContactImage} alt="Contact" className="ContactImage" /> {/* Add image here */}
      <h1 className="ContactHeading">Contact Us</h1>
      <div className="ContactDetails">
        <p className="DetailItem">
        <FontAwesomeIcon icon={faEnvelope} className="Icon" />
            <span className="Highlight">Mail:</span> info@rhyno.in</p>
        <p className="DetailItem">
        <FontAwesomeIcon icon={faPhone} className="Icon" />
            <span className="Highlight">Mobile no.:</span> +91-9023987528</p>
      </div>
      <div className="FeatureList">
        <div className="FeatureItem">Fire-safe</div>
        <div className="FeatureItem">Battery</div>
        <div className="FeatureItem">Range prediction</div>
        <div className="FeatureItem">Comfortable ride</div>
        <div className="FeatureItem">Stable and safe</div>
        <div className="FeatureItem">Fire-safe battery</div>
        <div className="FeatureItem">Range prediction</div>
        <div className="FeatureItem">Comfortable ride</div>
        <div className="FeatureItem">Stable and safe</div>
      </div>
  
      <div className="ContactFormContainer">
        <h2>How can we help you today?</h2>
        <p>Fill out the form and we'll be in touch soon!</p>
        <form className="ContactForm">
          <div className="FormGroup">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="FormGroup">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="FormGroup">
            <label htmlFor="message">How we can help you?</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="LocationItem">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="Icon" />
        <span className="Highlight">Location:</span> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
      </div>
      
    </div>
  );
}

export default ContactUs;
