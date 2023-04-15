import React from "react";
import { icons } from "./data";
import Pages from "./Pages";

const Footer = () => {
  return (
    <footer className="section footer">
      <Pages parentClass="footer-links" itemClass="footer-icon"/>

      <ul className="footer-icons">
        {icons.map((icon) => {
          return (
            <li key={icon.id}>
              <a href={icon.href} target="_blank" rel="noreferrer" className="footer-icon">
                <i className={icon.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().toUTCString()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
