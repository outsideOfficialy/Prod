import React, { TouchEventHandler } from "react";

import "./style.scss";
import "./@media.scss";

const PagesNav: React.FC<{ isMobile?: boolean; className?: string; extraLinks?: string[] }> = ({ extraLinks, className, isMobile = false }) => {
  return <ul className={!className ? "header__btns-container header__nav" : className}>
    {extraLinks ? extraLinks.map((el, idx) => <li key={idx}>{el}</li>) : null}
    <li>Новини</li>
    <li>Музика</li>
    <li>Мерч</li>
    <li>Про нас</li>
  </ul>
}

const IconsList: React.FC<{ isMobile?: boolean; className?: string }> = ({ className, isMobile = false }) => {
  return <div className={!className ? "header__btns-container header__icons" : className}>
    {isMobile && <p>Наші соц. мережи</p>}
    <div className="icons-container">
      <div className="icons-container__logo"></div>
      <div className="icons-container__logo"></div>
      <div className="icons-container__logo"></div>
      <div className="icons-container__logo"></div>
    </div>
  </div>
}

const Header: React.FC = () => {
  const swipeRef = React.useRef<null | number>(null);

  const [isMobile, setIsMobile] = React.useState(false);
  const [sideMenuIsOpened, setSideMenuIsOpened] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = sideMenuIsOpened ? "hidden" : "visible";

    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, [sideMenuIsOpened]);

  const toggleSideMenuOpen = () => {
    setSideMenuIsOpened(!sideMenuIsOpened);
  }

  const touchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    swipeRef.current = e.touches[0].clientX;
  }

  const touchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!swipeRef.current) return;
    const endX = e.changedTouches[0].clientX;
    if (swipeRef.current - endX > 50) toggleSideMenuOpen();
    swipeRef.current = null;
  }


  return <header className="header">
    {/* на мобилке сделать выпадающее меню */}

    {isMobile &&
      <div
        onClick={(e) => {
          const clickedEl = e.target as HTMLDivElement;
          if (clickedEl.classList.contains("side-menu-backdrop")) toggleSideMenuOpen();
        }} className={`side-menu-backdrop ${sideMenuIsOpened ? "opened" : ""}`}>
        <div
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
          className={`header__side-menu ${sideMenuIsOpened ? "opened" : ""}`}>

          <div className="header__side-menu-container">
            <div className="header__side-menu-title">
              <p>МЕНЮ</p>
              <button onClick={toggleSideMenuOpen} className="header__side-menu-close btn-close material-symbols-outlined">close</button>
            </div>

            <PagesNav />

            <IconsList isMobile />
          </div>
          <div className="header__side-menu-copyrights">
            <a className="copyrights__mail" href="mailto:outsideoffficial@gmail.com"><span className="material-symbols-outlined">mail</span>outsideoffficial@gmail.com</a>

            <p>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    }

    <div className="container">

      {isMobile && <button className="header__side-menu-btn material-symbols-outlined" onClick={toggleSideMenuOpen}>menu</button>}

      {/* если не мобилка, то отобразить иконки и навигацию на ряду с лого */}
      {!isMobile && <PagesNav />}

      <h1 className="header__logo">outside</h1>

      {!isMobile && <IconsList />}
    </div>
  </header>;
}

export { Header, PagesNav, IconsList };