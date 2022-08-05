import React from "react";
import CTA from "./CTA";
import "./header.css";
import me from "../../assets/giang.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Trường Giang</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="avatar" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;
