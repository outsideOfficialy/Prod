"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import ContentWrapper from "@/components/ContentWrapper";
import IconsLinkedList from "@/components/IconsLinkedList";

import "./style.scss";
import "./@media.scss";
import { SERVER_ROOT } from "@/utils/variables";
import ReactPaginate from "react-paginate";

interface musicReleaseObj {
  id: string;
  music_type: "album" | "single";
  preview_picture: string;
  release_name: string;
  release_songs: string;
  send_later: string;
  social_media_links: string;
}

const ITEMS_PER_PAGE = 2;

const Page: React.FC = () => {
  const [releasesData, setRealeasesData] = React.useState<null | musicReleaseObj[]>(null);
  const [showId, setShowId] = React.useState<number | null>(null);
  const [diapasonToShow, setDiapasonToShow] = React.useState<{startIndex: number; endIndex: number} | null>(null);

  const pagesAmnt = React.useRef(0);

  React.useEffect(() => {
    fetch(`${SERVER_ROOT}/music/`)
      .then(d => {
        if (!d.ok) {
          console.error("Error in fetch!", d);
        }
        return d.json();
      })
      .then(d => {
        setRealeasesData(d);
        pagesAmnt.current = Math.ceil(d.length / ITEMS_PER_PAGE);

        const startIndex = 0;
        const endIndex = startIndex + ITEMS_PER_PAGE - 1;
        setDiapasonToShow({
          startIndex,
          endIndex
        })
      })
      .catch((reason) => console.log(reason));
  }, []);

  const onPageChange = (e: any) => {
    const startIndex = e.selected * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE - 1;
    setDiapasonToShow({
      startIndex,
      endIndex
    })
  }

  return <PageLayout>
    <div className="flex-container gap-60">
      <UnderlinedTitle title="Музикальні релізи" />

      {releasesData && <>
        {<MusicReleasesList musicReleasesObj={releasesData.slice(diapasonToShow!.startIndex, diapasonToShow!.endIndex + 1)} showId={showId} setShowId={setShowId} />}
        <ReactPaginate
          breakLabel="..."
          nextLabel="arrow_back"
          onPageChange={onPageChange}
          pageRangeDisplayed={5}
          pageCount={pagesAmnt.current!}
          previousLabel="arrow_back"
          className="elements-pagination material-symbols-outlined"
          pageClassName="pagination__item"
          renderOnZeroPageCount={null}
        />
      </>}
    </div>
  </PageLayout>
}

const MusicReleasesList: React.FC<{ 
  musicReleasesObj: musicReleaseObj[];
  setShowId: (e: number | null) => void;
  showId: number | null;
 }> = ({
  musicReleasesObj, setShowId, showId
}) => {
  return musicReleasesObj.map((el, idx) => {
    const formatedDate = el.send_later.replaceAll("/", "-");
    const targetDate = new Date(formatedDate);
    const currentDate = new Date();

    targetDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if (currentDate.getTime() <= targetDate.getTime()) {
      console.log(currentDate.getTime(), targetDate.getTime());
      return <></>;
    }

    return (
      <ContentWrapper
        key={idx}
        className="music-release"
        id={idx}
        setShowId={setShowId}
      >
        {showId == idx ? <p className="hidden-id">{el.id}</p> : null}

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
      </ContentWrapper>
    )
  });
}

export default Page;