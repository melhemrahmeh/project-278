import React from "react";
import "../assets/styles/header.css";
import "../assets/styles/grid.css";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import MoviesSwiper from "./components/MoviesSwiper";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Logo2 from "../assets/images/logo2.png";
import user from "../assets/images/user.png";

const Maher = () => {
  const [show, setShow] = useState();

  //fetching the data from the API and inserting them to different arrays according to the genre
  const categories = [
    "Action & Adventure",
    "Animation",
    "Comedy",
    "Documentary",
    "History",
  ];
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const url = `https://google-play-store.onrender.com/api/movies`;
        const response = await axios.get(url);
        var data = response.data;
        var categorizedMovies = {};
        for (let i = 0; i < categories.length; i++) {
          const category = categories[i];
          categorizedMovies[category] = [];
        }

        for (let i = 0; i < data.length; i++) {
          const movie = data[i];
          if (categorizedMovies.hasOwnProperty(movie.category)) {
            categorizedMovies[movie.category].push(movie);
          }
        }
        setMovies(categorizedMovies);
      } catch (errorWhileFetchingNews) {
        console.log("error while fetching movies", errorWhileFetchingNews);
      }
    }

    fetchMovies();
  }, []);

  console.log(movies);

  return (
    // <h1></h1>
    <body>
      <header>
        <nav className="navbar container" onClick={() => setShow(!show)}>
          {show && <img className="logo" src={Logo2} alt="play store logo" />}
          <div className="search-box">
            <button className="btn-search" onClick={() => setShow(!show)}>
              <BsSearch />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
            />
          </div>

          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Apps
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Movies & TV
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                movies
              </a>
            </li>
            <li>
              <a href="#account">
                <img src={user} alt="user" className="user" />
              </a>
            </li>
            <div className="active"></div>
          </ul>
        </nav>
      </header>

      {/* New Movies Swiper  */}
      <MoviesSwiper genre="New Movies" elements={movies.Animation} />

      {/* grid of 10 movies  */}
      <div>
        <div className="gridbuttons">
          <button className="gridbutton" role="button">
            Top Free
          </button>
          <button className="gridbutton" role="button">
            Top Grossing
          </button>
          <button className="gridbutton" role="button">
            Top Paid
          </button>
        </div>
        <div className="grid">
          {movies.Animation.slice(0, 10).map((movie) => {
            return (
              <div class="grid-container">
                <a href="">
                  <div class="item">
                    <div className="left">
                      <img src={movie.media} alt="movie logo" />
                    </div>
                    <div className="right">
                      <h4 className="appname">{movie.movie_name}</h4>
                      <small className="appgenre">{movie.category}</small>
                      <p className="apprating">{movie.rating} &#9733;</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Another couple swipers for different movies genres*/}
      <MoviesSwiper genre="Top-selling movies" elements={movies.Animation} />
      <MoviesSwiper genre="animation" elements={movies.Animation} />
      <MoviesSwiper genre="Comedy" elements={movies.Animation} />
      <MoviesSwiper genre="Documentary" elements={movies.Animation} />
      <MoviesSwiper genre="History" elements={movies.Animation} />
    </body>
  );
};

export default Maher;
