import React from "react";

const HomePage = () => {
  return;
  <>
    <header class="nav__bar">
      <div class="nav__bar--wrapper container">
        <a href="#" class="img__logo--wrapper">
          <img
            src="./assest/blinker-icon.4f9b2663-Photoroom.png"
            class="img__logo"
            alt=""
          />
        </a>
        <div class="nav__link--list">
          <a href="#" class="nav__link">
            Home
          </a>
          <a href="#" class="nav__link">
            Find Your Movie
          </a>
          <button class="nav__link--btn">Contact</button>
        </div>
      </div>
    </header>
    <section id="landing__page">
      <div class="landing__page--content">
        <h1 class="landing__page--title fade-up">
          Australia's most awarded Movie subscription platform
        </h1>
        <h3 class="landing__page--sub-title fade-up">
          Find your favourite movies with <span class="purple">Blinker</span>
        </h3>
      </div>
      <div class="input__wrapper container fade-up">
        <input type="text" placeholder="Search by Name" class="search__bar" />
        <button class="input__btn">
          <i class="fa-solid fa-magnifying-glass icon-search"></i>
          <i class="fa-solid fa-spinner icon-spinner"></i>
        </button>
      </div>
      <div class="img__wrapper">
        <img
          src="./assest/building.681ea6bf.png"
          class="landing__page--img"
          alt=""
        />
      </div>
    </section>
  </>;
};

export default HomePage;
