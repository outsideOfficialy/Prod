// NewsCard.tsx

import React from "react";

import { SERVER_ROOT } from "@/utils/variables";

import "./style.scss";

interface NewsData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  preview_picture: string;
  send_later: string;
  date_posting: string;
}

const NewsCard: React.FC<{ news: NewsData }> = ({ news }) => {
  return (
    <div className="news-card">
      <div className="date-section">
        <p>{news.date_posting}</p>
      </div>
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
