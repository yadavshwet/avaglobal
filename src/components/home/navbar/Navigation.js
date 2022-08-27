import React from "react";
import logo from "../../../images/logo.svg";
import list from "../../../images/list.svg";
import "./navigation.css";

function Navigation() {
  return (
    <div className="nav-bar">
      <nav className="wrapper">
        <div className="app-logo">
          <a href="https://www.avaglobal.in/">
            <img src={logo} alt="avaglobal" id="logo" />
          </a>
        </div>
        <div className="menubar">
          <span>Welcome to AVA GLOBAL</span>
          <a href="/">
            <img src={list} alt="list" />
          </a>
        </div>
      </nav>
    </div>

    // <nav>
    //   <a href="https://www.avaglobal.in/">
    //     <img src={logo} alt="avaglobal" id="logo" />
    //   </a>
    //   <div className="me-auto">
    //     <span>Welcome to AVA GLOBAL</span>
    //   </div>
    // </nav>
  );
}

export default Navigation;
