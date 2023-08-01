import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import C_img1 from "../assets/logo-gasbro.png";
import C_img2 from "../assets/4-06-2023-TalentoDay.png";
import C_img3 from "../assets/graduation-guscina.png";
import { Container } from "react-bootstrap";


const CarouselHome = () => {

  return (
    <Container className="swiperCont">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={C_img1} alt="pic1" width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={C_img2}
            alt="pic2"
            width={400}
            height={300}
            className="img2_Carousel_Sized"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={C_img3} alt="pic3" width={300} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
  

  
}

export default CarouselHome;
