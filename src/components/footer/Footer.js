import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="inner-footer">
        <a href="https://www.avaglobal.in/">
          <img src={logo} alt="avaglobal" id="logo" />
        </a>
        <div className="solutions">
          <p id="solns">Solutions</p>
          <div className="foot-dash"></div>
          <div>
            <ul>
              <li>
                <a href="/">Optimal Logistics Network Design</a>
              </li>
              <li>
                <a href="/">Large Complex Estimations</a>
              </li>
              <li>
                <a href="/">
                  Interlay between Customised & <br />
                  Standardised solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="services">
          <p id="service">Services</p>
          <div className="foot-dash"></div>
          <div>
            <ul>
              <li>
                <a href="/">Air Freight</a>
              </li>
              <li>
                <a href="/">Sea Freight</a>
              </li>
              <li>
                <a href="/">Road Freight</a>
              </li>
              <li>
                <a href="/">Customs brokerage</a>
              </li>
              <li>
                <a href="/">Warehousing</a>
              </li>
              <li>
                <a href="/">Liasoning</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tools">
          <p id="tool">Tools</p>
          <div className="foot-dash"></div>
          <div>
            <ul>
              <li>
                <a href="/">Container Tracking</a>
              </li>
              <li>
                <a href="/">Container Configuration</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-us">
          <h5>Get in touch with us!</h5>
          <div className="contact">
            <input
              type="text"
              placeholder="Enter your email"
              id="contact-input"
            />
            <input type="submit" value="Submit" id="submit-form" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>© Copyright 2022 AVA GLOBAL - All Rights Reserved</p>
        <div className=""></div>
      </div>
    </footer>
  );
}

export default Footer;
