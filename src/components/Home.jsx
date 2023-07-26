import React from 'react'
import { Container } from 'react-bootstrap'
import "../App.css"
import CarouselHome from '../components/CarouselHome';



const Home = () => {
  return (
    <Container fluid className="backgroundContainer p-0 m-0">
      <section fluid id="home" className="backgroundSects p-0 m-0">
        <Container className="carousel_Dims d-flex flex-wrap justify-content-around align-items-center pt-5">
          <div className="d-flex flex-wrap align-items-center justify-content-center py-md-3 mt-md-3 py-lg-5 mt-lg-0">
            <div className="d-flex flex-wrap align-items-center justify-content-center pt-lg-0 mt-lg-0 ">
              <h1 className="padClass1 gasbroC fw-bold fst-italic">Gasbro</h1>
              <h4 className="text_diff text-light fw-bold p-4">
                Jr. Front-end Developer
              </h4>
            </div>
            <div className="d-flex align-items-center justify-content-center my-md-5 pt-lg-0 mt-lg-5 text-center">
              <h4 className="lineheightnav mx-3">
                My official <span className="text_diff"> Portfolio</span>
                <br />
                Web-App, Here I show you all my works about <br /> Web
                Development
              </h4>

              <div className="carousel_Dims d-flex align-items-center justify-content-center ">
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