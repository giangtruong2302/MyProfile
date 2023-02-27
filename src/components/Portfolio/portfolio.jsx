import React from "react";
import "./portfolio.css";
import port1 from "../../assets/portfolio1.jpg";
import port2 from "../../assets/portfolio2.jpg";
import port3 from "../../assets/portfolio3.jpg";
import port4 from "../../assets/portfolio4.jpg";
import port5 from "../../assets/portfolio5.png";
import port6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt="" />
          </div>
          <h3>
            GHGYM (Building a website for managing the gym system and supporting
            the registration of gym schedules)
          </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/truonggiang2302"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="#livedemo" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port2} alt="" />
          </div>
          <h3>Spotify plus </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/truonggiang2302"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="#livedemo" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port3} alt="" />
          </div>
          <h3>
            Kanban Web-App (Website to support task management, project
            management for individuals and businesses)
          </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/truonggiang2302"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="#livedemo" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port4} alt="" />
          </div>
          <h3>This is a portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/truonggiang2302"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="#livedemo" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port5} alt="" />
          </div>
          <h3>This is a portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/truonggiang2302"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="#livedemo" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port6} alt="" />
          </div>
          <h3>This is a portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/truonggiang2302"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="#livedemo" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
