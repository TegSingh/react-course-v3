import React from "react";
import logo from "../images/logo.svg";
import { icons } from "./data";
import Pages from "./Pages";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* Need to have different comment syntax */}
        {/* <!-- left this comment on purpose --> */}
        <Pages parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {icons.map((iconlink) => {
            const { id, href, icon } = iconlink;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
