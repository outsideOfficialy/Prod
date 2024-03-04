import React from "react";
import { SERVER_ROOT } from "@/utils/variables";
import IconsLinkedList from "@/components/IconsLinkedList";
import UnderlinedTitle from "@/components/UnderlinedTitle";

import "./style.scss";
// Определение интерфейса BandMember
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

// Компонент для отображения карточек участников группы
const BandMembersList: React.FC<{ bandMembers: BandMember[] }> = ({ bandMembers }) => {
  return (
    <>
      {bandMembers.map((member) => (
        <div key={member.id} className="content-wrapper member-box">
          <div className="member-box__left-side">
            <img
              src={`${SERVER_ROOT}/${JSON.parse(member.preview_picture)[0]}`}
              alt={member.nickname}
              className="member-box__img"
            />
            {/* Проверяем, есть ли социальные медиа ссылки */}
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
        </div>
      ))}
    </>
  );
};

export default BandMembersList;
