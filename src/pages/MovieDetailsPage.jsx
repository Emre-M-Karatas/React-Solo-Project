import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import "./SearchPage.css";
import Footer from "../pages/Footer";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const fetchMovieDetails = async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=64034610&i=${imdbID}&plot=full`
    );
    const data = await response.json();
    setMovie(data);

    setIsLoading(false);
  };

  fetchMovieDetails();
}, [imdbID]);

 if (isLoading) {
  return (
    <>
      <section className="hero__bg">
        <div className="hero__bg--img"></div>

        <header className="nav__bar container">
          <div className="nav__bar--wrapper">
            <Link to="/" className="img__logo--wrapper">
              <img src={logo} className="img__logo" alt="Blinker logo" />
            </Link>
            <div className="nav__link--list">
              <Link to="/" className="nav__link">
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
          <h1 className="content__title">Movie Details</h1>
        </section>
      </section>

      <section className="loading container active">
        <div className="loading__content">
          <i className="fa-solid fa-spinner loading__spinner"></i>
          <h2 className="loading__title">Loading movie details...</h2>
        </div>
      </section>
    </>
  );
}

 return (
  <div className="page">
    <div className="page__content">
    <section className="hero__bg">
      <div className="hero__bg--img"></div>

      <header className="nav__bar container">
        <div className="nav__bar--wrapper">
          <Link to="/" className="img__logo--wrapper">
            <img src={logo} className="img__logo" alt="Blinker logo" />
          </Link>
          <div className="nav__link--list">
            <Link to="/" className="nav__link">
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
        <h1 className="content__title">{movie.Title}</h1>
      </section>
    </section>

    <section className="movie__details container">
      <div className="movie__details--wrapper">
        <figure className="movie__poster--wrapper">
          <img src={movie.Poster} alt={movie.Title} className="movie__poster" />
        </figure>

        <div className="movie__info">
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </section>
    </div>
    <Footer />
  </div>
);
};

export default MovieDetailsPage;
