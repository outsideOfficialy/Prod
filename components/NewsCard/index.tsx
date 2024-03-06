// NewsCard.tsx

import React from "react";

import { SERVER_ROOT } from "@/utils/variables";

import "./style.scss";

const NewsCard: React.FC<{ news: any }> = ({ news }) => {
  return (
    <div className="news-card">
      <div className="top-section">
        <h3>{news.title}</h3>
      </div>
      <div className="bottom-section">
        <p>{news.content}</p>
        <img src={SERVER_ROOT + "/" + JSON.parse(news.preview_picture)[0]} alt="News Preview" />
      </div>
    </div>
  );
};

export default NewsCard;
