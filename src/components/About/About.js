import React from "react";
import img from "../../assets/undraw_programming_2svr (1).svg";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__img">
        <img src={img} alt="about-img" />
      </div>
      <div className="about__content">
        <div className="about__content-container">
          <h3 className="about__content-head">About Me</h3>
          <p className="about__content-text">
            I’m a front-end developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript
            code. I’m based in Fort Worth, Texas.
          </p>
          <Link to="/portfolio">
            <button className="about__content-btn btn">Go to portfolio</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
