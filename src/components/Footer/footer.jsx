import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Duong Truong Giang (Dyno)
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100037360239411">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/giangduong2302/">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/giang-duong-2a5297229/">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Dyno Duong</small>
      </div>
    </footer>
  );
};

export default Footer;
