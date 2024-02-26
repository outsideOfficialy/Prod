import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import imgMobile from "@/public/dan_4x_mobile.webp";
import imgDesktop from "@/public/dan_3x_desktop.webp";

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
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("https://www.backend.outside-official.com/slider/");
        const data: Slide[] = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchSlides();
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
        className="SwiperMainPage"
      >
        {slides.map((slide) => {
          const relativeLink = JSON.parse(slide.preview_picture_desktop)[0];
          const linkToImg = "https://www.backend.outside-official.com/" + relativeLink;
          return (
            <SwiperSlide key={slide.id}>
              <Image
                src={isMobile ? slide.preview_picture_mobile : linkToImg}
                alt={slide.title}
                priority={true}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
