"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import imgMobile from "@/public/dan_4x_mobile.webp";
import imgDesktop from "@/public/dan_3x_desktop.webp";
import React, { useEffect } from "react";

// Slider
import Slider from "@/components/slider";

export default function Home() {
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
    <PageLayout>
      {/* just for some content */}
      <Slider></Slider>
      <Image
        style={{ width: "100%", height: "100vh" }}
        src={isMobile ? imgMobile : imgDesktop}
        alt="banner"
        priority={true}
      />
    </PageLayout>
  );
}
