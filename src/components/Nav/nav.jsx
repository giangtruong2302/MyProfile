import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

import { RiServiceLine } from "react-icons/ri";
import { SiTransportforlondon } from "react-icons/si";
import { GiBatBlade } from "react-icons/gi";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <abbr title="Home">
        <a href="#" className={activeNav === "#" ? "active" : ""}>
          <AiOutlineHome />
        </a>
      </abbr>
      <abbr title="About">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      </abbr>
      <abbr title="Experience">
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <GiBatBlade />
        </a>
      </abbr>
      <abbr title="Service">
        <a
          href="#service"
          onClick={() => setActiveNav("#service")}
          className={activeNav === "#service" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
      </abbr>
      <abbr title="Portfolio">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <SiTransportforlondon />
        </a>
      </abbr>
      <abbr title="contact">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiBook />
        </a>
      </abbr>
    </nav>
  );
};

export default Nav;
