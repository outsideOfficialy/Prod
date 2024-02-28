"use client";

import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import UnderlinedTitle from "@/components/UnderlinedTitle";

// CSS
import "@/src/app/global.scss";

// ICONS
import icons from "@/src/icons/utils";

// Slider
import ClassicSlider from "@/components/ClassicSlider";

const Page: React.FC = () => {
  // Slider-data
  const [slides, setSlides] = useState([
    {
      id: 1,
      content: <Image src="" alt="Slide 1" width={800} height={600} />
    },
    {
      id: 2,
      content: <Image src="" alt="Slide 2" width={800} height={600} />
    },
    {
      id: 3,
      content: <Image src="" alt="Slide 3" width={800} height={600} />
    }
  ]);

  return (
    <PageLayout>
      <div className="flex-container gap-60">
        <div className="flex-container gap-30">
          <UnderlinedTitle title="Про нас" />
          <h3 className="sub-title">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </h3>
        </div>
        <div className="flex-container gap-30">
          <UnderlinedTitle title="Наші соц. мережи" />
          <div className="btn-box">
            <button className="btn-icons">
              <Image src={icons.spotify} alt="Spotify" />
            </button>
            <button className="btn-icons">
              <Image src={icons.iTunes} alt="Spotify" />
            </button>
            <button className="btn-icons">
              <Image src={icons.soundCloud} alt="Spotify" />
            </button>
            <button className="btn-icons">
              <Image src={icons.instagram} alt="Spotify" />
            </button>
          </div>
          {/* to do */}
          {/* active btn with text inside btn */}
        </div>

        <ClassicSlider slides={slides} />
        {/* here should be slider ++ */}
        {/* finish slider */}

        <div className="flex-container gap-30">
          <UnderlinedTitle title="Учасники групи" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
