import React from "react";
import "../assets/styles/header.css";
import "../assets/styles/swiper.css";
import "../assets/styles/grid.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import appLogo from "../assets/images/apps/applogo.jfif";
import appImage from "../assets/images/apps/appimage.jfif";

const Maher = () => {
  const [apps, setApps] = useState([]);
  const [games, setGames] = useState([]);

  const [show, setShow] = useState(true);

  function FetchApps() {
    useEffect(() => {
      fetch("https://google-play-store.onrender.com/api/apps")
        .then((response) => response.json())
        .then((data) => setApps(data))
        .catch((err) => console.log(err));
    }, []);
    console.log(apps);
  }

  function FetchGames() {
    useEffect(() => {
      fetch("https://google-play-store.onrender.com/api/games")
        .then((response) => response.json())
        .then((data) => setGames(data))
        .catch((err) => console.log(err));
    }, []);
    console.log(games);
  }

  FetchApps();
  FetchGames();
  return (
    <body>
      <header>
        <nav className="navbar container" onClick={() => setShow(!show)}>
          {show && <img className="logo" src={Logo} alt="play store logo" />}
          <div className="search-box">
            <button className="btn-search" onClick={() => setShow(!show)}>
              <i className="fas fa-search"></i>
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
                Books
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

      <div>
        <div className="buttons">
          <button className="button" role="button">
            Top Free
          </button>
          <button className="button" role="button">
            Top Grossing
          </button>
          <button className="button" role="button">
            Top Paid
          </button>
        </div>
        <div className="grid">
          {apps.map((app) => {
            return (
              <div class="grid-container">
                <a href="">
                  <div class="item">
                    <div className="left">
                      <img src={app.logo} alt="app logo" />
                    </div>
                    <div className="right">
                      <h4 className="appname">{app.app_name}</h4>
                      <small className="appgenre">{app.category}</small>
                      <p className="apprating">{app.rating} &#9733;</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="swiper">
        <h1 className="genre">Genre</h1>

        <Swiper
          effect={"coverflow"}
          slidesPerView={3}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 20,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {games.map((game) => {
            return (
              <SwiperSlide>
                <a>
                  <div class="card">
                    <img
                      className="card-img"
                      src={game.media}
                      alt="game media"
                    />

                    <div class="card-info">
                      <p class="text-title">{game.game_name}</p>
                    </div>
                    <div class="card-footer">
                      <img
                        className="gameLogo"
                        src={game.media}
                        alt="game logo"
                      />
                      <div className="info">
                        <span class="text-title">{game.category}</span>
                        <span class="text-title">{game.rating} &#9733;</span>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </body>
  );
};

export default Maher;
