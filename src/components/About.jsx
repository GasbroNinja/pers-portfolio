import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import avatarG from "../assets/avatar.jpeg";


const About = () => {
  return (
    <Container fluid className="backgroundContainer p-0 m-0">
      <section fluid id="about" className="backgroundSects p-0 m-0">
        <Container className=" d-flex flex-wrap justify-content-around align-items-center pt-5">
          <div className="d-flex flex-wrap align-items-center justify-content-center py-md-3 mt-md-3 py-lg-5 mt-lg-0">
            <div className=" d-flex align-items-center justify-content-center pt-lg-0 mt-lg-0 ">
              <h1 className="padClass1 gasbroC2 fw-bold fst-italic">Gasbro</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center my-md-5 pt-lg-0 mt-lg-0 text-center"></div>
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <div className="myMask">
              <img src={avatarG} alt="avatar" className="" />
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default About;
