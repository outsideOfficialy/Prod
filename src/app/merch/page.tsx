"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";
import ContentWrapper from "@/components/ContentWrapper";

import "./style.scss";

const Page: React.FC = () => {
  return <PageLayout hideScrollUpBtn>
    <div className="flex-container gap-60">
      <ContentWrapper>
        <p>Скоро запуск!</p>
        <p>Слідкуйте за нашими новинами щоб не прогавити!</p>
      </ContentWrapper>
      <a href="/news" className="btn-primary">Останні новини <span className="material-symbols-outlined">arrow_forward_ios</span></a>
    </div>
  </PageLayout>
}

export default Page;