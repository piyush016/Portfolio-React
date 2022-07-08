import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">
        PIYUSH
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          <FaFacebookF />
        </a>
        <a href="https://facebook.com">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Piyush Kumar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
