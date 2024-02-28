"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import UnderlinedTitle from "@/components/UnderlinedTitle";

// css
import "@/src/app/global.scss";

const Page: React.FC = () => {
  return (
    <PageLayout>
      <div className="container gap-60">
        <UnderlinedTitle title="Про нас" />
        <h3 className="sub-title">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </h3>
        <UnderlinedTitle title="Наші соц. мережи" />
      </div>
    </PageLayout>
  );
};

export default Page;
