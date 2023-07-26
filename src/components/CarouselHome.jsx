import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import C_img1 from "../assets/logo-gasbro.png";
import C_img2 from "../assets/4-06-2023-TalentoDay.png";
import C_img3 from "../assets/graduation-guscina.png";

function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="p-0" fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className=" d-flex justify-content-center">
          <img src={C_img1} alt="img1" className="formatCarous" />
        </div>
        <Carousel.Caption>
          <h3 className="text_diff">Professional Design</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" d-flex justify-content-center">
          <img src={C_img2} alt="img2" className="formatCarous" />
        </div>
        <Carousel.Caption>
          <h3 className="text_diff">Actitude</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" d-flex justify-content-center">
          <img src={C_img3} alt="img3" className="formatCarous" />
        </div>
        <Carousel.Caption>
          <h3 className="text_diff">Able to Work</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
