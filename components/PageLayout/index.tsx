import PageTemplate from "../PageTemplate";
import { Header } from "../Header";
import Footer from "../Footer";
import React from "react";



interface PageProps {
  children: React.ReactNode | React.ReactNode[];
  header?: boolean | undefined;
  footer?: boolean | undefined;
}

const PageLayout: React.FC<PageProps> = ({
  children,
  header,
  footer
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  });
  
  return <>
    {/* if you write header in Page props, than it will dissappear */}
    {header === undefined && <Header isMobile={isMobile} />}

    <PageTemplate>
      {children}
    </PageTemplate>

    {footer === undefined && <Footer isMobile={isMobile} />}
  </>
}

export default PageLayout;