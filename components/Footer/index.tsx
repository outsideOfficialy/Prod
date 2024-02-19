import "./style.scss";
import "./@media.scss"

import { PagesNav } from "../Header";


const Footer: React.FC = () => {
  return <footer className="footer">
    <div className="container">
      <div className="footer-nav">
        <h1 className="footer-nav__logo">outside</h1>
        <PagesNav extraLinks={["Головна"]} className="footer-nav__pages-nav" />
      </div>
      <div className="footer-copyrights">
        <div className="copyrights-container">
          <h4 className="copyrights-date">
            © 2024 — Outside
          </h4>
          <h4 className="copyrights-container__links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </h4>
        </div>

        <a className="copyrights__mail" href="mailto:outsideoffficial@gmail.com"><span className="material-symbols-outlined">mail</span>outsideoffficial@gmail.com</a>
      </div>

    </div>
  </footer>;
}

export default Footer;