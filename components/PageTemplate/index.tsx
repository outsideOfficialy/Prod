import React, { useEffect } from "react";

interface PageTemplateProps {
  children: React.ReactNode | React.ReactNode[];
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children
}) => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    const loadEndHandler = () => {
      setShowLoader(false);
      document.body.style.overflowY = "scroll";
    };

    document.addEventListener("load", loadEndHandler);

    return document.removeEventListener("load", loadEndHandler);
  });

  return <main>
    <div className={`page-loader ${showLoader ? "show" : ""}`}>
      Loading...
    </div>
    {children}
  </main>;
}

export default PageTemplate;