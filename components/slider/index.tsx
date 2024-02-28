import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import "./style.scss";
import "./@media.scss";

interface Slide {
  id: string;
  title: string;
  link: string;
  preview_picture_mobile: string;
  preview_picture_desktop: string;
  send_later: string;
}

export default function Slider() {
  const [isMobile, setIsMobile] = useState(false);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.backend.outside-official.com/slider/");
        const data: Slide[] = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    fetchData();
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="swiper-main-page white-dots"
      >
        {slides.map((slide) => {
          const backEndURL = "https://www.backend.outside-official.com/";
          const linkToImg = isMobile
            ? backEndURL + JSON.parse(slide.preview_picture_mobile)[0]
            : backEndURL + JSON.parse(slide.preview_picture_desktop)[0];
          return (
            <SwiperSlide key={slide.id} className="slide-main-page">
              <a href={slide.link}>
                <div className="slide-title-box">
                  <h2>{slide.title}</h2>
                </div>
                <img src={linkToImg} alt={slide.title} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
