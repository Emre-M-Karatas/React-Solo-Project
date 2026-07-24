import React from "react";
import logo from "../assets/logo.png";
import building from "../assets/building.png";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <>
      <section className="hero__bg">
        <div className="hero__bg--img"></div>

        <header className="nav__bar container">
          <div className="nav__bar--wrapper">
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
        <section className="content__wrapper container">
          <h1 className="content__title">Browse Movies</h1>
          <div className="input__wrapper">
            <input
              type="text"
              className="input__movies"
              placeholder="Browse by Name or Year"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </section>
      </section>

      <section id="search" className="container">
        <div className="filter__content--wrapper">
          <h1 className="filter__title">
            Search results for <span className="purple"></span>
          </h1>
        </div>
        <select id="filter">
          <option value="" disabled selected>
            Sort
          </option>
          <option value="A_to_Z">A to Z</option>
          <option value="Z_to_A">Z to A</option>
          <option value="Newest_to_Oldest">Newest to Oldest</option>
          <option value="Oldest_to_Newest">Oldest to Newest</option>
        </select>
      </section>

      <section className="loading container">
        <i className="fa-solid fa-spinner loading__spinner"></i>
      </section>

      <section className="movies container">
        <div className="movies__list"></div>
      </section>
    </>
  );
};

export default SearchPage;
