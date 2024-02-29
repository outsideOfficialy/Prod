import React from "react";
import Image from "next/image";

import icons from "@/src/icons/utils";

interface IconsLinkedListProps {

}
// i'll complete this
const IconsLinkedList: React.FC<IconsLinkedListProps> = ({

}) => {
  return <div className="btn-box">
    <button className="btn-icons">
      <Image src={icons.spotify} alt="Spotify" />
    </button>
    <button className="btn-icons">
      <Image src={icons.iTunes} alt="Spotify" />
    </button>
    <button className="btn-icons">
      <Image src={icons.soundCloud} alt="Spotify" />
    </button>
    <button className="btn-icons">
      <Image src={icons.instagram} alt="Spotify" />
    </button>
  </div>;
}

export default IconsLinkedList;