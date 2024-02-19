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
        <p className="copyrights-container">
          <p className="copyrights-date">
            © 2024 — Outside
          </p>
          <p className="copyrights-container__links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </p>
        </p>

        <a className="copyrights__mail" href="mailto:outsideoffficial@gmail.com"><span className="material-symbols-outlined">mail</span>outsideoffficial@gmail.com</a>
      </div>

    </div>
  </footer>;
}

export default Footer;