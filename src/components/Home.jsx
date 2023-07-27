import React from 'react'
import { Container } from 'react-bootstrap'
import "../App.css"
import CarouselHome from '../components/CarouselHome';



const Home = () => {
  return (
    <Container fluid className="backgroundContainer p-0 m-0">
      <section fluid id="home" className="backgroundSects p-0 m-0">
        <Container className="carousel_Dims d-flex flex-wrap justify-content-around align-items-center pt-5">
          <div className="d-flex flex-wrap align-items-center justify-content-center py-sm-0 mt-sm-0 py-md-3 mt-md-3 py-lg-5 mt-lg-0">
            <div className="d-flex flex-wrap align-items-center justify-content-center p-2">
              <h1 className="padClass1 gasbroC fw-bold fst-italic">Gasbro</h1>
              <h4 className="text_diff text-light fw-bold p-3">
                Jr. Front-end Developer
              </h4>
            </div>
            <div className="d-flex align-items-center justify-content-center my-md-5 pt-lg-0 mt-lg-5 text-center">
              <div className="d-flex align-items-center justify-content-center pe-lg-5 pe-md-3 pe-sm-0">
                <h4 className="lineheightnav mx-3">
                  My official <span className="text_diff"> Portfolio</span>
                  <br />
                  Web-App, Here I show you all my works about Web Development
                </h4>
              </div>

              <div className="carousel_Dims d-flex align-items-center justify-content-center ps-lg-5 ps-md-3 ps-sm-0">
                <CarouselHome />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}

export default Home