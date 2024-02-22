import "./style.scss";
import "./@media.scss"

import React from "react";
import { PagesNav, IconsList } from "../Header";
import LinkedList from "../LinkedList";
import { motion } from "framer-motion";

const Footer: React.FC<{ isMobile: boolean }> = ({
  isMobile
}) => {

  return <footer className="footer">
    <motion.div
      // ANIM
      initial={{ opacity: 0, translateY: -50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: .3, delay: .5 }}
      viewport={{ once: false }}
      className="container">
      <div className="footer-nav">
        <h1 className="footer-nav__logo">outside
          <motion.hr
            // ANIM
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: .5, delay: .3 }}
            viewport={{ once: false }}
            className="separate-line" />
        </h1>

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
                  link: "/terms-of-service"
                },
                {
                  title: "Privacy Policy",
                  link: "/privacy-policy"
                }
              ]} />
            </div>
          }
          <motion.hr
            // ANIM
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: .5 }}
            viewport={{ once: false }}
            className="separate-line" />
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
              link: "/terms-of-service"
            },
            {
              title: "Privacy Policy",
              link: "/privacy-policy"
            }
          ]} />}
        </div>

        <a className="copyrights__mail" href="mailto:outsideoffficial@gmail.com"><span className="material-symbols-outlined">mail</span>outsideoffficial@gmail.com</a>
      </div>

    </motion.div>
  </footer>;
}

export default Footer;