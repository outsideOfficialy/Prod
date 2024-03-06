import React from "react";
import { SERVER_ROOT } from "@/utils/variables";
import IconsLinkedList from "@/components/IconsLinkedList";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import ContentWrapper from "@/components/ContentWrapper"; // Импортируем ContentWrapper

import "./style.scss";

export interface BandMember {
  id: string;
  nickname: string;
  birthdate: string;
  role: string;
  about: string;
  social_media_links: string;
  preview_picture: string;
  send_later: string;
}

const BandMembersList: React.FC<{ bandMembers: BandMember[] }> = ({ bandMembers }) => {
  const [showId, setShowId] = React.useState<string | number | null>(null);

  return (
    <>
      {bandMembers.map((member) => (
        <ContentWrapper key={member.id} className="member-box" id={member.id} setShowId={setShowId}>
          <div className="member-box__left-side">
            <img
              src={`${SERVER_ROOT}/${JSON.parse(member.preview_picture)[0]}`}
              alt={member.nickname}
              className="member-box__img"
            />
            {member.social_media_links && (
              <IconsLinkedList
                buttonText="Перейти"
                iconsList={JSON.parse(member.social_media_links)}
              />
            )}
          </div>
          <div className="member-box__right-side">
            <UnderlinedTitle subtitle title={`${member.nickname}`} />
            <div className="member-box__right-side__member-bithday">
              <p className="bold">Дата народження: </p>
              <p>{member.birthdate}</p>
            </div>
            <div className="member-box__right-side__member-role">
              <p className="bold">Роль: </p>
              <p>{member.role}</p>
            </div>
            <div className="member-box__right-side__member-about">
              <p>{member.about}</p>
            </div>
          </div>
        </ContentWrapper>
      ))}
    </>
  );
};

export default BandMembersList;
