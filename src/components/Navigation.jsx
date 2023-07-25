import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css"
import { Link } from 'react-scroll';

function Navigation() {
  return (
    <Container
      fluid
      className="nav p-0 m-0 d-flex justify-content-around align-items-center"
    >
      <Navbar
        collapseOnSelect
        data-bs-theme="light"
        className="nav__container__actions text-light"
        expand="lg"
      >
        <Container fluid className="d-flex align-items-center p-2">
          <Navbar.Brand
            href="#home"
            className="fw-bolder py-0 ps-md-3 ps-lg-5 text-light"
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
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5 text-light"
              >
                <Link activeClass="active" smooth spy to="home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5 text-light"
              >
                <Link activeClass="active" smooth spy to="about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5 text-light"
              >
                <Link activeClass="active" smooth spy to="services">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5 text-light"
              >
                <Link activeClass="active" smooth spy to="portfolio">
                  Portfolio
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="fw-semibold fs-5 py-0 px-md-2 px-lg-5 text-light"
              >
                <Link activeClass="active" smooth spy to="contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;