import React from "react";

import "./style.scss";
import "./@media.scss";

const HeaderNav: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  return <ul className="header__btns-container header__nav">
    <li>Новини</li>
    <li>Музика</li>
    <li>Мерч</li>
    <li>Про нас</li>
  </ul>
}

const HeaderIcons: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  return <div className="header__btns-container header__icons">
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
  const [isMobile, setIsMobile] = React.useState(false);
  const [sideMenuIsOpened, setSideMenuIsOpened] = React.useState(false);

  React.useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  });

  const toggleSideMenuOpen = () => {
    setSideMenuIsOpened(!sideMenuIsOpened);
  }


  return <header className="header">
    {/* на мобилке сделать выпадающее меню */}
    {isMobile && <div className={`header__side-menu ${sideMenuIsOpened ? "opened" : ""}`}>

      <div className="header__side-menu-title">
        <p>МЕНЮ</p>
        <button onClick={toggleSideMenuOpen} className="header__side-menu-close btn-close material-symbols-outlined">close</button>        
      </div>

      <HeaderNav />

      <HeaderIcons isMobile/>

    </div>}

    <div className="container">

      {isMobile && <button className="header__side-menu-btn material-symbols-outlined" onClick={toggleSideMenuOpen}>menu</button>}

      {/* если не мобилка, то отобразить иконки и навигацию на ряду с лого */}
      {!isMobile && <HeaderNav />}

      <div className="header__logo">outside</div>

      {!isMobile && <HeaderIcons />}
    </div>
  </header>;
}

export default Header;