// src/components/NavBar.js
import React from "react";
import { LinkContainer } from "react-router-bootstrap"; // helps integrate react-router with React-Bootstrap Nav.Link
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <LogoImage style={{ height: "50px", marginRight: "10px" }} />
            Mom & Pop Shop Web Design
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>LandingPage</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
