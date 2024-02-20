import React from "react";

interface PageTemplateProps {
  children: React.ReactNode | React.ReactNode[];
  scrollUpBtn?: boolean;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  scrollUpBtn = true
}) => {
  const [showScrollUp, setShowScrollUp] = React.useState(false);

  React.useEffect(() => {
    if (scrollUpBtn) {
      window.addEventListener("scroll", () => {
        window.scrollY >= 100 ? setShowScrollUp(true) : setShowScrollUp(false);
        })
    }
  });

  return <main>
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