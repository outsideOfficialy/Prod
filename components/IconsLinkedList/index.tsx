import React from "react";
import Image from "next/image";

import icons from "@/src/icons/utils";
import "./style.scss";

interface IconsLinkedListProps {
  iconsList: {
    platform: string;
    link: string;
  }[];
  buttonText: string;
}

function getIconItem(platform: string) {
  switch (platform.toLowerCase().trim()) {
    case "spotify":
      return icons.spotify;
    case "apple_music":
      return icons.iTunes;
    case "soundcloud":
      return icons.soundCloud;
    case "youtube_music":
      return icons.youtubeMusic;
    case "instagram":
      return icons.instagram;
    case "tiktok":
      return icons.tikTok;
    case "youtube":
      return icons.youTube;
    case "twitter":
      return icons.twitter;
    case "telegram":
      return icons.telegram;
    case "discord":
      return icons.discord;
    case "twitch":
      return icons.twitch;
    default:
      return null;
  }
}

const IconsLinkedList: React.FC<IconsLinkedListProps> = ({ iconsList, buttonText }) => {
  return (
    <div className="btn-box">
      {iconsList.map((el, idx) => {
        if (el.link.trim() === "") return;
        const getIcon = getIconItem(el.platform);
        if (!getIcon) return "Error in icon";

        return (
          <a target="_blank" href={el.link} className="btn-icons" key={idx}>
            <Image src={getIcon} alt={el.platform} />
            <span className="">{buttonText}</span>
            <span className="arrow-right material-symbols-outlined">arrow_right_alt</span>
          </a>
        );
      })}
    </div>
  );
};

export default IconsLinkedList;
