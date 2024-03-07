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
  const [headerHeight, setHeaderHeight] = React.useState(0);

  React.useEffect(() => {

    const header = document.querySelector("header");
    console.log(window.getComputedStyle(header!).position);
    
    if (header && window.getComputedStyle(header).position === "sticky") {
      setHeaderHeight(parseInt(window.getComputedStyle(header).height));
    }

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

  return <main style={{minHeight: `calc(100dvh - ${headerHeight}px)`}}>
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