import React from "react";

interface PageTemplateProps {
  children: React.ReactNode | React.ReactNode[];
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children
}) => {
  const [showLoader, setShowLoader] = React.useState(true);
  // window.document.body.style.overflowY = "hidden";

  React.useEffect(() => {

    const loadEndHandler = () => {
      setShowLoader(false);
      document.body.style.overflowY = "scroll";
    };

    loadEndHandler();
    
  });

  return <main>
    <div className={`page-loader ${showLoader ? "show" : ""}`}>
      Loading...
    </div>
    {children}
  </main>;
}

export default PageTemplate;