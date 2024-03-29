"use client";

import React, { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import IconsLinkedList from "@/components/IconsLinkedList";
import BandMembersList from "@/components/BandMembersList";
import ContentWrapperSkeleton from "@/components/ContenWrapperSkeleton";

import { BandMember } from "@/components/BandMembersList";

// CSS
import "@/src/app/global.scss";
import "./style.scss";

// Slider
import ClassicSlider from "@/components/ClassicSlider";

// Server_root
import { SERVER_ROOT } from "@/utils/variables";

const Page: React.FC = () => {
  // Slider-data
  const [slides, setSlides] = useState([
    {
      id: 1,
      content: <img src="/about-us.png" alt="Slide 1" />
    },
    {
      id: 2,
      content: <img src="/about-us.png" alt="Slide 2" />
    },
    {
      id: 3,
      content: <img src="/about-us.png" alt="Slide 3" />
    }
  ]);

  // Список иконок для передачи в компонент IconsLinkedList
  const iconsList = [
    { platform: "spotify", link: "https://spotify.com" },
    {
      platform: "apple_music",
      link: "https://apple.com/music"
    },
    { platform: "soundcloud", link: "https://soundcloud.com" },
    {
      platform: "youtube_music",
      link: "https://music.youtube.com"
    }
  ];

  const [bandMembers, setBandMembers] = useState<BandMember[] | null>(null);
  const [showData, setShowData] = React.useState(false);

  const transition = 300;

  useEffect(() => {
    fetch(`${SERVER_ROOT}/members/`)
      .then((response) => response.json())
      .then((data) => {
        setBandMembers(data);
        setTimeout(() => { setShowData(true) }, transition);
      })
      .catch((error) => console.error("Error fetching band members:", error));
  }, []);

  return (
    <PageLayout>
      <div className="flex-container gap-60 about-us-container">
        <div className="flex-container gap-30">
          <UnderlinedTitle title="Про нас" />
          <h3 className="sub-title">
            <p>
              «Outside» – рок-гурт, заснований у Харкові, Україна. Група була сформована Даніелем
              (вокал, бас), Дейзоном (лід-гітара), і Майком (ритм-гітара) в 2022. З того часу до них
              приєднався Ендрю (барабани).
            </p>
            <p>
              Спочатку гурт був лише соло-проектом Даніеля, який називався «44 minutes». Але після
              приєднання Дейзона та Майка було ухвалено рішення розпочати музичний шлях з нуля.
              Пізніше Ендрю прийшов у цей колектив, и усі разом зараз працюють в гурті «outside».
            </p>
          </h3>
        </div>
        <div className="flex-container gap-30">
          <UnderlinedTitle title="Наші соц. мережи" />
          <IconsLinkedList buttonText="Перейти" iconsList={iconsList} />
        </div>

        <div className="flex-container gap-30">
          <ClassicSlider slides={slides} />
        </div>

        <div className="flex-container gap-30 members-list">
          <UnderlinedTitle title="Учасники групи" />
          <ContentWrapperSkeleton transition={transition} isShown={!bandMembers}>
            {showData && <BandMembersList bandMembers={bandMembers!} />}
          </ContentWrapperSkeleton>
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
