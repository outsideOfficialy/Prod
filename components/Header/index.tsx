import "./style.css";
import "./@media.css";

const Header: React.FC = () => {
  return <header>
    <div className="container d-flex justify-between">

      <ul className="header__btns-container header__nav d-flex justify-between">
        <li>Новини</li>
        <li>Музика</li>
        <li>Мерч</li>
        <li>Про нас</li>
      </ul>

      <div className="header__logo">outside</div>

      <div className="header__btns-container header__icons-container d-flex justify-between">
        <div className="icons-container__logo"></div>
        <div className="icons-container__logo"></div>
        <div className="icons-container__logo"></div>
        <div className="icons-container__logo"></div>
      </div>
    </div>
  </header>;
}

export default Header;