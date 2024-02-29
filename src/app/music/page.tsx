"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import ContentWrapper from "@/components/ContentWrapper";
import IconsLinkedList from "@/components/IconsLinkedList";

import "./style.scss";
import { SERVER_ROOT } from "@/utils/variables";

interface musicReleaseObj {
  id: string;
  music_type: "album" | "single";
  preview_picture: string;
  release_name: string;
  release_songs: string;
  send_later: string;
  social_media_links: string;
}

interface ReleaseSongObj {

}

const Page: React.FC = () => {
  const [releasesData, setRealeasesData] = React.useState<null | musicReleaseObj[]>(null);
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
    <div className="flex-container gap-60">
      <UnderlinedTitle title="Музикальні релізи" />

      {releasesData && <>
        {releasesData.map((el, idx) => {
          return (
            <ContentWrapper
              key={idx}
              className="music-release"
              id={idx}
              setShowId={setShowId}
            >
              {showId == idx ? <p className="hidden-id">{el.id}</p> : null}
              <div className="release-info">
                <div className="flex-container gap-30">
                  <UnderlinedTitle subtitle title={`Назва релізу (${el.music_type === "single" ? "Сінгл" : "Альбом"})`} />
                  <ol className="release-info__songs-list">
                    {JSON.parse(el.release_songs).map((el: string, idx: number) => {
                      return <li key={idx + el}>{el}</li>;
                    })}
                  </ol>

                </div>

                <div className="flex-container gap-30">
                  <UnderlinedTitle subtitle title="Слухати" />
                  <IconsLinkedList iconsList={JSON.parse(el.social_media_links)} />
                </div>
              </div>

              <div className="music-release__img-container">
                <img src={SERVER_ROOT + "/" + JSON.parse(el.preview_picture)[0]} alt="Release Preview" />
              </div>
            </ContentWrapper>
          )
        })}
      </>}
    </div>
  </PageLayout>
}

export default Page;