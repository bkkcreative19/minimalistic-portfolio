import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__item">
        <div className="projects__item-img img1"></div>
        <div className="projects__item-content">
          <div className="projects__item-content-container">
            <h3 className="projects__item-content-head">MyTeam</h3>
            <p className="projects__item-content-text">
              {" "}
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </p>
            <Link to="/projects/MyTeam">
              <button className="projects__item-content-btn btn">
                View Project
              </button>
            </Link>
          </div>
          <div className="border-top"></div>
          <div className="border-bottom"></div>
        </div>
      </div>
      <div className="projects__item">
        <div className="projects__item-img img2"></div>
        <div className="projects__item-content">
          <div className="projects__item-content-container">
            <h3 className="projects__item-content-head">Photosnap</h3>
            <p className="projects__item-content-text">
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              features section.
            </p>
            <Link to="/projects/Photosnap">
              <button className="projects__item-content-btn btn">
                View Project
              </button>
            </Link>
          </div>
          <div className="border-top"></div>
          <div className="border-bottom"></div>
        </div>
      </div>
      <div className="projects__item">
        <div className="projects__item-img img3"></div>
        <div className="projects__item-content">
          <div className="projects__item-content-container">
            <h3 className="projects__item-content-head">Beach Resort</h3>
            <p className="projects__item-content-text">
              This was a small project which mostly consisted of HTML and CSS. I
              built a fully-responsive landing page. The only JavaScript this
              project required was to enable the toggling of the mobile
              navigation.
            </p>
            <Link to="/projects/Beach Resort">
              <button className="projects__item-content-btn btn">
                View Project
              </button>
            </Link>
          </div>
          <div className="border-top"></div>
          <div className="border-bottom"></div>
        </div>
      </div>
      <div className="projects__item">
        <div className="projects__item-img img4"></div>
        <div className="projects__item-content">
          <div className="projects__item-content-container">
            <h3 className="projects__item-content-head">Mern Store</h3>
            <p className="projects__item-content-text">
              This project was built using the Mern Stack. Its a full stack app
              where each user can create lists and tasks for each list
            </p>
            <Link to="/projects/mern-store">
              <button className="projects__item-content-btn btn">
                View Project
              </button>
            </Link>
          </div>
          <div className="border-top"></div>
          <div className="border-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
