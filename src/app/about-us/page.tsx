"use client";

import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import IconsLinkedList from "@/components/IconsLinkedList";

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

  // Список иконок для передачи в компонент IconsLinkedList
  const iconsList = [
    { platform: "spotify", link: "https://spotify.com", buttonText: "Перейти" },
    {
      platform: "apple_music",
      link: "https://apple.com/music",
      buttonText: "Перейти"
    },
    { platform: "soundcloud", link: "https://soundcloud.com", buttonText: "Перейти" },
    {
      platform: "youtube_music",
      link: "https://music.youtube.com",
      buttonText: "Перейти"
    }
  ];

  return (
    <PageLayout>
      <div className="flex-container gap-60">
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
          <UnderlinedTitle subtitle title="Наші соц. мережи" />
          <IconsLinkedList iconsList={iconsList} />
        </div>

        <ClassicSlider slides={slides} />

        <div className="flex-container gap-30">
          <UnderlinedTitle title="Учасники групи" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
