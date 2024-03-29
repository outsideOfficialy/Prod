import React from "react";

import "./style.scss";
import "./@media.scss";

import LinkedList from "../LinkedList";
import { motion } from "framer-motion";

import icons from "@/src/icons/utils";
import Image from "next/image";

interface PagesNavProps {
  isMobile?: boolean;
  className?: string;
  extraLinks?: { title: string; link: string }[];
}

const PagesNav: React.FC<PagesNavProps> = ({ extraLinks, className, isMobile = false }) => {
  const links = [
    {
      title: "Новини",
      link: "/news"
    },
    {
      title: "Музика",
      link: "/music"
    },
    {
      title: "Про нас",
      link: "/about-us"
    },
    {
      title: "Мерч",
      link: "/merch"
    }
  ];
  if (extraLinks && extraLinks.length) extraLinks.forEach((el) => links.unshift(el));

  return (
    <LinkedList
      className={!className ? "header__btns-container header__nav" : className}
      links={links}
    />
  );
};

const IconsList: React.FC<{
  isMobile?: boolean;
  className?: string;
}> = ({ className, isMobile = false }) => {
  return (
    <div className={!className ? "header__btns-container header__icons" : className}>
      {isMobile && <p>Наші соц. мережи</p>}
      <div className="icons-container">
        {/* Используем иконки из объекта icons */}
        <div className="icons-container__logo">
          <Image src={icons.spotify} alt="Spotify" />
        </div>
        <div className="icons-container__logo">
          <Image src={icons.iTunes} alt="iTunes" />
        </div>
        <div className="icons-container__logo">
          <Image src={icons.soundCloud} alt="SoundCloud" />
        </div>
        <div className="icons-container__logo">
          <Image src={icons.instagram} alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

const Header: React.FC<{ isMobile: boolean, transparentHeader?: boolean; }> = ({ isMobile, transparentHeader }) => {
  const swipeRef = React.useRef<null | number>(null);

  const [sideMenuIsOpened, setSideMenuIsOpened] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = sideMenuIsOpened ? "hidden" : "visible";
  }, [sideMenuIsOpened]);

  const toggleSideMenuOpen = () => {
    setSideMenuIsOpened(!sideMenuIsOpened);
  };

  const touchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    swipeRef.current = e.touches[0].clientX;
  };

  const touchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!swipeRef.current) return;
    const endX = e.changedTouches[0].clientX;
    if (swipeRef.current - endX > 50) toggleSideMenuOpen();
    swipeRef.current = null;
  };
  // search for ANIM to find my purposes for animations

  return (
    <motion.header
      // ANIM
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className={`header ${transparentHeader ? "transparent" : ""}`}
    >
      {isMobile && (
        <div
          onClick={(e) => {
            const clickedEl = e.target as HTMLDivElement;
            if (clickedEl.classList.contains("side-menu-backdrop")) toggleSideMenuOpen();
          }}
          className={`side-menu-backdrop ${sideMenuIsOpened ? "opened" : ""}`}
        >
          <div
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
            className={`header__side-menu ${sideMenuIsOpened ? "opened" : ""}`}
          >
            <div className="header__side-menu-container">
              <div className="header__side-menu-title">
                <p>МЕНЮ</p>
                <button
                  onClick={toggleSideMenuOpen}
                  className="header__side-menu-close btn-close material-symbols-rounded"
                >
                  close
                </button>
              </div>

              <PagesNav />

              <IconsList isMobile />
            </div>
            <div className="header__side-menu-copyrights">
              <a className="copyrights__mail" href="mailto:outsideoffficial@gmail.com">
                <span className="material-symbols-outlined">mail</span>outsideoffficial@gmail.com
              </a>

              <p>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        {isMobile && (
          <button
            className="header__side-menu-btn material-symbols-rounded"
            onClick={toggleSideMenuOpen}
          >
            menu
          </button>
        )}

        {/* если не мобилка, то отобразить иконки и навигацию на ряду с лого */}
        {!isMobile && <PagesNav />}

        <motion.h1
          // ANIM
          // initial={{ opacity: 0, translateY: -50 }}
          // animate={{ opacity: 1, translateY: 0 }}
          // transition={{ duration: 0.5 }}
          className="header__logo"
        >
          <a href="/">
            outside
          </a>
        </motion.h1>

        {!isMobile && <IconsList />}
      </div>

      <motion.hr
        // ANIM
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="separate-line"
      />
    </motion.header>
  );
};

export { Header, PagesNav, IconsList };
