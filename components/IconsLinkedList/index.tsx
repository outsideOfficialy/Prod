import React from "react";
import Image from "next/image";

import icons from "@/src/icons/utils";

interface IconsLinkedListProps {
  iconsList: {
    platform: string;
    link: string;
  }[]
}

function getIconItem(platform: string) {
  console.log(platform);
  switch (platform.toLowerCase().trim()) {
    case "spotify": return icons.spotify;
    case "apple_music": return icons.iTunes;
    case "soundcloud": return icons.soundCloud;
    case "youtube_music": return icons.youtubeMusic;
    default: return null;
  }
}

const IconsLinkedList: React.FC<IconsLinkedListProps> = ({
  iconsList
}) => {
  return <div className="btn-box">
    {iconsList.map((el, idx) => {
      
      if (el.link.trim() === "") return;
      const getIcon = getIconItem(el.platform)
      if (!getIcon) return "Error in icon";


      return <a href={el.link} className="btn-icons">
        <Image src={getIcon} alt={el.platform} />
        <span className="">Слухати зараз</span>
        <span className="arrow-right material-symbols-outlined">arrow_right_alt</span>
      </a>
    })}
  </div>;
}

export default IconsLinkedList;