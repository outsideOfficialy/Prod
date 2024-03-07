// Page.tsx
"use client";

import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";

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
  date_posting: string;
}

const Page: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsData[] | null>(null);

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
      <div className="flex-container gap-60 news-container">
        <div className="flex-container gap-30">
          <UnderlinedTitle title="Новини" />
          <h3 className="sub-title">
            <p>Записи з наших репетицій; Майбутні тури; Дні народження; Наше звичайне життя.</p>
          </h3>
        </div>
        <div className="flex-container gap-30">
          {newsData && <Pagination elementsList={newsData.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))} itemsPerPage={2} />}
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
