"use client";

import PageLayout from "@/components/PageLayout";
import React, { useEffect } from "react";

// Slider
import Slider from "@/components/SliderMainPage";

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
    <PageLayout hideScrollUpBtn transparentHeader>
      {/* just for some content */}
      <Slider></Slider>
    </PageLayout>
  );
}
