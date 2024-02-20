import "./style.scss";
import "./@media.scss"

import React from "react";
import { PagesNav, IconsList } from "../Header";
import LinkedList from "../LinkedList";


const Footer: React.FC<{ isMobile: boolean }> = ({
  isMobile
}) => {

  return <footer className="footer">
    <div className="container">
      <div className="footer-nav">
        <h1 className="footer-nav__logo">outside</h1>

        <div className="footer-nav-pages-container">
          <div>
            {isMobile && <p className="footer-nav__title">Навігація</p>}
            <PagesNav extraLinks={[{ title: "Головна", link: "/" }]} className="footer-nav__pages-nav" />
          </div>

          {isMobile &&
            <div>
              <p className="footer-nav__title">Посилання</p>
              <LinkedList className="footer-nav__links" links={[
                {
                  title: "Terms of Sevice",
                  link: ""
                },
                {
                  title: "Privacy Policy",
                  link: ""
                }
              ]}/>
            </div>
          }
        </div>
        {isMobile && <IconsList className="footer-icons-container" />}
      </div>
      <div className="footer-copyrights">
        <div className="copyrights-container">
          <h4 className="copyrights-date">
            © 2024 — Outside
          </h4>
          {!isMobile && <LinkedList className="copyrights-container__links" links={[
            {
              title: "Terms of Sevice",
              link: ""
            },
            {
              title: "Privacy Policy",
              link: ""
            }
          ]} />}
        </div>

        <a className="copyrights__mail" href="mailto:outsideoffficial@gmail.com"><span className="material-symbols-outlined">mail</span>outsideoffficial@gmail.com</a>
      </div>

    </div>
  </footer>;
}

export default Footer;