import React from "react";

interface PageTemplateProps {
  children: React.ReactNode | React.ReactNode[];
  scrollUpBtn?: boolean;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  scrollUpBtn = true
}) => {
  const [showLoader, setShowLoader] = React.useState(true);
  const [showScrollUp, setShowScrollUp] = React.useState(false);
  // window.document.body.style.overflowY = "hidden";

  React.useEffect(() => {
    if (scrollUpBtn) {
      window.addEventListener("scroll", () => {
        window.scrollY >= 100 ? setShowScrollUp(true) : setShowScrollUp(false);
      })
    }

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
    {scrollUpBtn &&
      <button
        onClick={(e) => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
        className={`btn-scroll-up material-symbols-outlined ${showScrollUp ? "visible" : ""}`}>arrow_upward</button>}
  </main>;
}

export default PageTemplate;