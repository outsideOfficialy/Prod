"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";
import ContentWrapper from "@/components/ContentWrapper";

import "./style.scss";

const Page: React.FC = () => {
  return <PageLayout>
    <div className="container">
      <UnderlinedTitle title="Музикальні релізи" />

      <ContentWrapper>
        test
      </ContentWrapper>
    </div>
  </PageLayout>
}

export default Page;