"use client";

import Image from 'next/image'
import Page from '@/components/Page'
import imgMobile from "@/public/dan-mobile.png";
import imgDesktop from "@/public/dan-desktop.png";
import React, { useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  });

  return (
    <Page>
      {/* just for some content */}
      <Image style={{ "width": "100%", "height": "100vh" }} src={isMobile ? imgMobile : imgDesktop} alt="banner" />
    </Page>
  )
}
