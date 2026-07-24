import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import building from "../assets/building.png";

const HomePage = () => {
  return (
    <>
      <body>
        <header className="nav__bar">
          <div className="nav__bar--wrapper container">
            <a href="#" className="img__logo--wrapper">
              <img src={logo} className="img__logo" alt="Blinker logo" />
            </a>
            <div className="nav__link--list">
              <Link to="#" className="nav__link">
                Home
              </Link>
              <Link to="/search" className="nav__link">
                Find Your Movie
              </Link>
              <button className="nav__link--btn">Contact</button>
            </div>
          </div>
        </header>
        <section id="landing__page">
          <div className="landing__page--content">
            <h1 className="landing__page--title fade-up">
              Australia's most awarded Movie subscription platform
            </h1>
            <h3 className="landing__page--sub-title fade-up">
              Find your favourite movies with{" "}
              <span className="purple">Blinker</span>
            </h3>
          </div>
          <div className="input__wrapper container fade-up">
            <input
              type="text"
              placeholder="Search by Name"
              className="search__bar"
            />
            <button className="input__btn">
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
              <i className="fa-solid fa-spinner icon-spinner"></i>
            </button>
          </div>
          <div className="img__wrapper">
            <img src={building} className="landing__page--img" alt="" />
          </div>
        </section>
      </body>
    </>
  );
};

export default HomePage;
