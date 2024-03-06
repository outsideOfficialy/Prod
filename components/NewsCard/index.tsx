// NewsCard.tsx

import React from "react";

import { SERVER_ROOT } from "@/utils/variables";

const NewsCard: React.FC<{ news: any }> = ({ news }) => {
  return (
    <div className="news-card">
      <img src={SERVER_ROOT + "/" + JSON.parse(news.preview_picture)[0]} alt="News Preview" />
      <h4>{news.title}</h4>
      <p>{news.subtitle}</p>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsCard;
