import "./style.css";

const Header:React.FC = () => {
  return <header>
    <div className="container d-flex">
      <ul className="header__nav">
        <li>Новини</li>
        <li>Музика</li>
        <li>Мерч</li>
        <li>Про нас</li>
      </ul>
      
      <div className="header__logo">outside</div>

      <div className="header__icons-container">
        <div className="icons-container__logo"></div>
        <div className="icons-container__logo"></div>
        <div className="icons-container__logo"></div>
        <div className="icons-container__logo"></div>
      </div>
    </div>
  </header>;
}

export default Header;