// Page.tsx
"use client";

import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import NewsCard from "@/components/NewsCard";

// CSS
import "@/src/app/global.scss";
import "./style.scss";

// Server_root
import { SERVER_ROOT } from "@/utils/variables";

interface NewsData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  preview_picture: string;
  send_later: string;
}

const Page: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);

  useEffect(() => {
    fetch(`${SERVER_ROOT}/news/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        return response.json();
      })
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  return (
    <PageLayout>
      <div className="flex-container gap-60 about-us-container">
        <div className="flex-container gap-30">
          <UnderlinedTitle title="Новини" />
          <h3 className="sub-title">
            <p>НОВІ ЗАПИСИ. ТУР. ДНІ НАРОДЖЕННЯ. ТА ПРОСТО МИ.</p>
          </h3>
        </div>
        <div className="flex-container gap-30 members-list">
          {newsData.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
