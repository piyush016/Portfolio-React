import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/piyush.png";
import HeaderSocials from "./HeaderSocials";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Piyush Kumar</h1>
        <h5 className="text-light">Full Stack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="myface" />
        </div>

        <a href="#footer" className="scroll_down">
          <BsFillArrowDownCircleFill />
        </a>
      </div>
    </header>
  );
};

export default Header;
