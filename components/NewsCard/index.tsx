// NewsCard.tsx

import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: .3 }}
      viewport={{ once: true }}
      className="news-card">
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
    </motion.div>
  );
};

export default NewsCard;
