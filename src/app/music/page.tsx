"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import ContentWrapper from "@/components/ContentWrapper";
import ContentWrapperSkeleton from "@/components/ContenWrapperSkeleton";
import IconsLinkedList from "@/components/IconsLinkedList";
import Pagination from "@/components/Pagination";

import "./style.scss";
import "./@media.scss";
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

const Page: React.FC = () => {
  const [releasesData, setRealeasesData] = React.useState<null | musicReleaseObj[]>(null);
  const [showPagination, setShowPagination] = React.useState(false);

  const transition = 300;

  React.useEffect(() => {
    fetch(`${SERVER_ROOT}/music/`)
      .then(d => {
        if (!d.ok) {
          console.error("Error in fetch!", d);
        }
        return d.json();
      })
      .then(d => {
        // после того как данные были получены, спустя полсекунды (для демонстрации) 
        // вставляем данные и отображаем элементы
        setTimeout(() => { 
          setRealeasesData(d)
          setTimeout(() => { setShowPagination(true) }, transition);
         }, 500);
      })
      .catch((reason) => console.log(reason));
  }, []);


  return <PageLayout>
    <div className="flex-container gap-60">
      <UnderlinedTitle title="Музикальні релізи" />
      {showPagination &&
        <Pagination itemsPerPage={3} elementsList={releasesData!.map((el, idx) => {
          return <MusicReleaseElement key={el.id} el={el} />;
        })} />
      }
      <ContentWrapperSkeleton transition={transition} isShown={!releasesData} />
      <ContentWrapperSkeleton transition={transition} isShown={!releasesData} />
    </div>
  </PageLayout>
}

const MusicReleaseElement: React.FC<{
  el: musicReleaseObj;
}> = ({
  el
}) => {
    const [showId, setShowId] = React.useState<string | number | null>(null);

    const formatedDate = el.send_later.replaceAll("/", "-");
    const targetDate = new Date(formatedDate);
    const currentDate = new Date();

    targetDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if (currentDate.getTime() <= targetDate.getTime()) {
      console.log(currentDate.getTime(), targetDate.getTime());
      return <></>;
    }

    return <ContentWrapper
      key={el.id}
      className="music-release"
      id={el.id}
      setShowId={setShowId}
    >
      {showId == el.id ? <p className="hidden-id">{el.id}</p> : null}

      <div className="music-release__img-container">
        <img src={SERVER_ROOT + "/" + JSON.parse(el.preview_picture)[0]} alt="Release Preview" />
      </div>

      <div className="release-info">
        <div className="flex-container gap-30">
          <UnderlinedTitle subtitle title={`${el.release_name} (${el.music_type === "single" ? "Сінгл" : "Альбом"})`} />
          <ol className="release-info__songs-list">
            {JSON.parse(el.release_songs).map((el: string, idx: number) => {
              return <li key={idx + el}>{el}</li>;
            })}
          </ol>

        </div>

        <div className="flex-container gap-30">
          <UnderlinedTitle subtitle title="Слухати" />
          <IconsLinkedList buttonText="Слухати зараз" iconsList={JSON.parse(el.social_media_links)} />
        </div>
      </div>
    </ContentWrapper>;
  }

export default Page;