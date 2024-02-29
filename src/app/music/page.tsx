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
          <div className="flex-container gap-60">
            {releasesData.map((el, idx) => {

              //! можно вынести все эти обработчики в саму компоненту ContentWrapper
              return (
                <ContentWrapper
                  key={idx}
                  className="release"
                  id={idx}
                  setShowId={setShowId}
                >

                  {showId == idx ? el.id : null}

                  <div className="release-info"></div>
                  <div className="release-img">
                    {/* <img src={SERVER_ROOT + "/" + JSON.parse(el.preview_picture)[0]} alt="Release Preview" /> */}
                  </div>
                </ContentWrapper>)
            })}
          </div>
        }
      </div>
    </section>
  </PageLayout>
}

export default Page;