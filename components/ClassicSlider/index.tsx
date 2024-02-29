// Slider
import React from "react";

// Import Slider React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Slider styles
import "swiper/css";
import "swiper/css/pagination";

// Import owr css
import "./style.scss";
import "./@media.scss";

// Import Slider required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface ClassicSlider {
  id: number;
  content: JSX.Element; // Тип содержимого слайда
}

const Slider: React.FC<{ slides: ClassicSlider[] }> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      modules={[Autoplay, Pagination]}
      className="clasic-slider"
    >
      {/* Отображение слайдов из props */}
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
