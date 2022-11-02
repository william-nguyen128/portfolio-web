import React from "react";
import { Logo, navItems, socialIcons } from "../NavbarComponents";
import "./FooterNav.css";

function FooterNav() {
  return (
    <div className="footer-container">
      <div className="footer-nav-container">
        <div className="footer-navigation">
          {navItems.map(({ name, id }) => (
            <a className="footer-nav-item" href={id}>
              {name}
            </a>
          ))}
        </div>
        <div className="footer-socials">
          {socialIcons.map((icon) => (
            <a className="footer-social-icon" href="#">
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-logo-container">{Logo}</div>
      <h6>Copyright ©2022 William-Nguyen All rights reserved.</h6>
    </div>
  );
}

export default FooterNav;
