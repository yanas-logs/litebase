import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/css/Slider.css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import images from "../data/images.json";

export const Slider = ({ slides = images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.url} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
