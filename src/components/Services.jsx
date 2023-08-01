import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import image1 from "../assets/Icon/HTML.png";
import image2 from "../assets/Icon/React.png";
import image3 from "../assets/Icon/JavaScript-logo.png";
import image4 from "../assets/Icon/TypeScript.png";
import image5 from "../assets/Icon/CSS3.png";
import image6 from "../assets/Icon/Bootstrap.png";
import image7 from "../assets/Icon/Sass.svg.png";
import image8 from "../assets/Icon/Github.png";

const Services = () => {
  
  const imagesList = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
    },
    {
      id: 5,
      src: image5,
      alt: "Image 5",
    },
    {
      id: 6,
      src: image6,
      alt: "Image 6",
    },
    {
      id: 7,
      src: image7,
      alt: "Image 7",
    },
    {
      id: 8,
      src: image8,
      alt: "Image 8",
    },
  ];

  return (
    <Container fluid className="backgroundContainer p-0 m-0">
      <section fluid id="services" className="backgroundSects p-0 m-0">
        <div className=" d-flex align-items-center justify-content-center pt-lg-5 mt-lg-0 ">
          <h1 className=" gasbroC2 fw-bold fst-italic">Services</h1>
        </div>
        <Container className=" d-flex flex-wrap justify-content-around align-items-center pt-5">
          <div className=" d-flex align-items-center justify-content-center py-md-3 mt-md-3 py-lg-5 mt-lg-0">
            <Row className="d-flex align-items-center justify-content-center my-md-5 pt-lg-0 mt-lg-0 text-center">
              <h4 className="lineheightnav ">
                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
                  className="d-flex align-items-center justify-content-start"
                >
                  <span className="text_diff px-4 me-3">Structure</span>
                  <br />
                  <span className="text_diff px-4 me-3">Framework</span>
                  <br />
                  <span className="text_diff px-4 me-3">
                    Programming languages
                  </span>
                  <br />
                  <span className="text_diff px-4 me-3">Graphics</span>
                  <br />
                </Col>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {/*HTML5 | DOM | OOP | Local/Session Storage -
                  React.js | Redux.js | React-Router | Hooks -
                  JavaScript | TypeScript - | CSS | Bootstrap | SASS |
                  Responsiveness | Flexbox | UX/UI | Animations */}
                </div>
              </h4>
            </Row>
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <div className="d-flex align-items-center justify-content-center px-5">
              {imagesList &&
                imagesList.map((image) => (
                  <Col
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    xl={2}
                    xxl={2}
                    className="d-flex flex-row align-items-center justify-content-center"
                  >
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      width={100}
                      height={100}
                      className="logosSized"
                    />
                  </Col>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default Services;
