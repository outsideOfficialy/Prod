"use client"

import React from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";

const Page: React.FC = () => {
  return <PageLayout>
    <div className="container">
      <UnderlinedTitle title="Музикальні релізи" />
    </div>
  </PageLayout>
}

export default Page;