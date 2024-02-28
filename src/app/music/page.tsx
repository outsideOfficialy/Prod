"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import ContentWrapper from "@/components/ContentWrapper";

import "./style.scss";
import { SERVER_ROOT } from "@/utils/variables";

interface musicRelease {
  id: string;
  music_type: string;
  preview_picture: string;
  release_name: string;
  release_songs: string;
  send_later: string;
  social_media_links: string;
}

const Page: React.FC = () => {
  const [releasesData, setRealeasesData] = React.useState<null | musicRelease[]>(null);
  const [showId, setShowId] = React.useState<number | null>(null);
  const dragging = React.useRef(false);
  const moveCoorX = React.useRef(0);

  React.useEffect(() => {
    fetch(`${SERVER_ROOT}/music/`)
      .then(d => {
        if (!d.ok) {
          console.error("Error in fetch!", d);
        }
        return d.json();
      })
      .then(d => setRealeasesData(d))
      .catch((reason) => console.log(reason));
  }, []);

  return <PageLayout>
    <section className="music-releases">
      <div className="container">
        <UnderlinedTitle title="Музикальні релізи" />

        {releasesData &&
          <div className="music-releases__container">
            {releasesData.map((el, idx) => {

              return <ContentWrapper
                onMouseDown={(e) => {
                  dragging.current = true;
                  moveCoorX.current = e.clientX;
                }}
                onMouseMove={(e) => {
                  if (dragging.current == true) {
                    const currentX = e.clientX;
                    const deltaX = moveCoorX.current - currentX;

                    if (deltaX >= 300) {
                      // console.log('Пользователь провел мышью влево на 100 пикселей!');
                      setShowId(idx);
                      dragging.current = false;
                    }
                  }
                }}
                onMouseUp={(e) => dragging.current = false}
                key={idx} className="release">
                {showId == idx ? el.id : null}
                <div className="release-info">

                </div>
                <div className="release-img">
                  {/* <img src={SERVER_ROOT + "/" + JSON.parse(el.preview_picture)[0]} alt="Release Preview" /> */}
                </div>
              </ContentWrapper>
            })}
          </div>
        }
      </div>
    </section>
  </PageLayout>
}

export default Page;