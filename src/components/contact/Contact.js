/* eslint-disable react/style-prop-object */
import React from "react";
import { Image } from "react-bootstrap";
import contact from "../../assets/images/contact.png";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-heading ">Contact Info</div>

      <div className="information">
        <div>
          <p>
            405, 4th Floor, Windfall, Sahar Plaza Complex, J.B Nagar, Andheri -
            Kurla Road, Andheri (East), Mumbai - 400059.
          </p>
          <p> +91 22 4611 3300 / 99 +91 22 4611 3305</p>
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.884724635908!2d72.86779481469804!3d19.112712387066882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83950d18eb9%3A0x445b7d08a9dff0b7!2sAVA%20GLOBAL!5e0!3m2!1sen!2sin!4v1661688819651!5m2!1sen!2sin"
            width="600"
            height="450"
            title="maps"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
