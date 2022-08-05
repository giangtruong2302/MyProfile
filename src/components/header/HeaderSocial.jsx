import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/truonggiang2302" target="_blank">
        <BsLinkedin />
      </a>
      <a
        href="https://www.linkedin.com/in/giang-duong-2a5297229/"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a href="" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
