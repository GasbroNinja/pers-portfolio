import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import "../App.css";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainComp = () => {
  return (
    <Container fluid className="backgroundContainer p-0 m-0">
      <Container fluid className=" p-0 m-0">
        <Navigation />
        <Container fluid className=" p-0 m-0">
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </Container>
      </Container>
    </Container>
  );
};

export default MainComp;
