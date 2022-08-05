import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

import { RiServiceLine } from "react-icons/ri";
import { SiTransportforlondon } from "react-icons/si";
const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#contact">
        <BiBook />
      </a>
      <a href="#experience">
        <BiMessageSquareDetail />
      </a>
      <a href="#portfolio">
        <SiTransportforlondon />
      </a>
      <a href="#service">
        <RiServiceLine />
      </a>
    </nav>
  );
};

export default Nav;
