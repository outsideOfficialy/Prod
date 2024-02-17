import "./style.scss";
import "./@media.scss";

const Header: React.FC = () => {
  return <header className="header">
    <div className="container">

      <ul className="header__btns-container header__nav">
        <li>Новини</li>
        <li>Музика</li>
        <li>Мерч</li>
        <li>Про нас</li>
      </ul>

      <div className="header__logo">outside</div>

      <div className="header__btns-container header__icons">
        <div className="icons-container">
          <div className="icons-container__logo"></div>
          <div className="icons-container__logo"></div>
          <div className="icons-container__logo"></div>
          <div className="icons-container__logo"></div>
        </div>
      </div>
    </div>
  </header>;
}

export default Header;