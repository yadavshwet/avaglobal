import React from "react";
import logo from "../../images/logo.png";
import "./navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    // <div className="nav-bar">
    //   <nav className="wrapper">
    //     <div className="app-logo">
    //       <a href="https://www.avaglobal.in/">
    //         <img src={logo} alt="avaglobal" id="logo" />
    //       </a>
    //     </div>
    //     <div className="menubar">
    //       <span>Welcome to AVA GLOBAL</span>
    //       <a href="/">
    //         <span className="sprite hamburger" id="menublk"></span>
    //       </a>
    //     </div>
    //   </nav>
    // </div>

    <Navbar>
      <Container bg="light" variant="light">
        <a href="https://www.avaglobal.in/">
          <img src={logo} alt="avaglobal" id="logo" />
        </a>
        <Nav className="me-auto">
          <span>Welcome to AVA GLOBAL</span>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
