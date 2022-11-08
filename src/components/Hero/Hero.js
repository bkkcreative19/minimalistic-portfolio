import React from "react";
import { withRouter } from "react-router-dom";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__content-text">
          Hey, I’m Baron King and I love building beautiful websites
        </h1>
        <button className="hero__content-btn btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
              <path d="M0 9l8 4 8-4" />
              <path opacity=".5" d="M0 5l8 4 8-4" />
              <path opacity=".25" d="M0 1l8 4 8-4" />
            </g>
          </svg>
          About Me
        </button>
      </div>
    </section>
  );
};

export default withRouter(Hero);
