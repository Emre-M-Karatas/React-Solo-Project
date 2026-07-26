import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useSearchParams } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [searchParams] = useSearchParams();

const moviesPerPage = 8;
const startIndex = (currentPage - 1) * moviesPerPage;
const endIndex = startIndex + moviesPerPage;

const sortedMovies = [...movies].sort((a, b) => {
  if (sortOption === "A_to_Z") {
    return a.Title.localeCompare(b.Title);
  }

  if (sortOption === "Z_to_A") {
    return b.Title.localeCompare(a.Title);
  }

  if (sortOption === "Oldest_to_Newest") {
    return Number(a.Year) - Number(b.Year);
  }

  if (sortOption === "Newest_to_Oldest") {
    return Number(b.Year) - Number(a.Year);
  }

  return 0;
});

const currentMovies = sortedMovies.slice(startIndex, endIndex);
const totalPages = Math.ceil(sortedMovies.length / moviesPerPage);

  const searchMovies = async (term = searchTerm) => {
    if (!term.trim()) return;

    setIsLoading(true);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=64034610&s=${term}`,
    );
    const data = await response.json();

    setMovies(data.Search || []);
    setCurrentPage(1);
    setIsLoading(false);
  };

  useEffect(() => {
    const query = searchParams.get("query");

    if (!query) return;

    const fetchMoviesFromQuery = async () => {
      setSearchTerm(query);
      setIsLoading(true);

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=64034610&s=${query}`,
      );
      const data = await response.json();

      setMovies(data.Search || []);
      setCurrentPage(1);
      setIsLoading(false);
    };

    fetchMoviesFromQuery();
  }, [searchParams]);

  return (
    <>
      <section className="hero__bg">
        <div className="hero__bg--img"></div>

        <header className="nav__bar container">
          <div className="nav__bar--wrapper">
            <a href="/" className="img__logo--wrapper">
              <img src={logo} className="img__logo" alt="Blinker logo" />
            </a>
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
          <h1 className="content__title">Browse Movies</h1>
          <div className="input__wrapper">
            <form
              className="search__form"
              onSubmit={(event) => {
                event.preventDefault();
                searchMovies();
              }}
            >
              <input
                type="text"
                className="input__movies"
                placeholder="Browse by Name or Year"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button type="submit" className="search__icon--btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </section>
      </section>

      <section id="search" className="container">
        <div className="filter__content--wrapper">
          <h1 className="filter__title">
            Search results for <span className="purple">{searchTerm}</span>
          </h1>
          <p className="movies__found">{movies.length} movies found</p>
          <div className="pagination">
            <button
              className="pagination__btn"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages || 1}
            </span>

            <button
              className="pagination__btn"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Next
            </button>
          </div>
        </div>
        <select
          id="filter"
          value={sortOption}
          onChange={(event) => {
            setSortOption(event.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="A_to_Z">A to Z</option>
          <option value="Z_to_A">Z to A</option>
          <option value="Newest_to_Oldest">Newest to Oldest</option>
          <option value="Oldest_to_Newest">Oldest to Newest</option>
        </select>
      </section>

      <section className={`loading container ${isLoading ? "active" : ""}`}>
        <div className="loading__content">
          <i className="fa-solid fa-spinner loading__spinner"></i>
          <h2 className="loading__title">Loading movies...</h2>
        </div>
      </section>

      {!isLoading && (
        <section className="movies container">
          <div className="movies__list">
            {currentMovies.map((movie) => (
              <Link
                to={`/movie/${movie.imdbID}`}
                className="movie"
                key={movie.imdbID}
              >
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default SearchPage;
