"use client";

import React, { useEffect } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import owr styles
import "./style.scss";
import "./@media.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import imgMobile from "@/public/dan_4x_mobile.webp";
import imgDesktop from "@/public/dan_3x_desktop.webp";

export default function Slider() {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  });

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
        <SwiperSlide>
          <Image src={isMobile ? imgMobile : imgDesktop} alt="banner" priority={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={isMobile ? imgMobile : imgDesktop} alt="banner" priority={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={isMobile ? imgMobile : imgDesktop} alt="banner" priority={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={isMobile ? imgMobile : imgDesktop} alt="banner" priority={true} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
