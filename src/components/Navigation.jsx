import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css"

function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg=""
        data-bs-theme="dark"
        className="text-light"
        expand="lg"
      >
        <Container
          fluid
          className="d-flex justify-content-center align-items-center p-2"
        >
          <Navbar.Brand
            href="#home"
            className="fw-bolder py-0 ps-md-3 ps-lg-5"
          >
            Gasbro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="text-center lineheightnav"
          >
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5"
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;