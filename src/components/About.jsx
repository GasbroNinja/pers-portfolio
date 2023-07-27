import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import avatarG from "../assets/avatar.jpeg";


const About = () => {
  return (
    <Container fluid className="backgroundContainer p-0 m-0">
      <section fluid id="about" className="backgroundSects p-0 m-0">
        <Container className=" d-flex flex-wrap justify-content-around align-items-center pt-5">
          <div className=" d-flex flex-column align-items-center justify-content-center py-md-3 mt-md-3 py-lg-5 mt-lg-0">
            <div className=" d-flex align-items-center justify-content-center pt-lg-0 mt-lg-0 ">
              <h1 className=" gasbroC2 fw-bold fst-italic">About Me</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center my-md-5 pt-lg-0 mt-lg-0 text-center">
              <h4 className="lineheightnav ">
                Sono <span className="text_diff px-4">Gabriele Cuscinà</span> ho
                21 anni, sono nato a Messina <br /> e mi sono diplomato al
                Nautico di Messina "Caio Duilio". Dopo il primo imbarco <br />{" "}
                ho compreso che quella non fosse la strada giusta per me. <br />{" "}
                Ho abbandonato l' avvio della mia carriera nell'ambito marittimo{" "}
                <br /> per iniziare il mio percorso come Web Developer{" "}
                <span className="text_diff px-4">Front-end</span>.
              </h4>
            </div>
          </div>
          <div className="imgRel1 d-flex align-items-center justify-content-center ">
            <div className="myMask">
              <img src={avatarG} alt="avatar" className="imgSize1" width={320} />
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default About;
