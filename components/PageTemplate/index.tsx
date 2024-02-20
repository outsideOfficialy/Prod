import React from "react";

interface PageTemplateProps {
  children: React.ReactNode | React.ReactNode[];
}

const PageTemplate:React.FC<PageTemplateProps> = ({
  children
}) => {
  return <main>
    {children}
  </main>;
}

export default PageTemplate;