import React from "react";
import "../assets/styles/header.css";
import "../assets/styles/swiper.css";
import "../assets/styles/grid.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import appLogo from "../assets/images/apps/applogo.jfif";
import appImage from "../assets/images/apps/appimage.jfif";

const Maher = () => {
  return (
    <body>
      <header>
        <nav className="navbar container">
          <img className="logo" src={Logo} alt="play store logo" />

          <div class="search-box">
            <button class="btn-search">
              <i class="fas fa-search"></i>
            </button>
            <input
              type="text"
              class="input-search"
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

      <div className="grid">
        <div className="buttons">
          <button class="button" role="button">
            Top Free
          </button>
          <button class="button" role="button">
            Top Grossing
          </button>
          <button class="button" role="button">
            Top Paid
          </button>
        </div>
        <div class="grid-container">
          <a href="#app">
            <div class="item">
              <div className="left">
                <img src={appLogo} alt="app logo" />
              </div>
              <div className="right">
                <h4 className="appname">Name</h4>
                <small className="appgenre">Genre</small>
                <p className="apprating">3.3 &#9733;</p>
              </div>
            </div>
          </a>
          <a href="#app">
            <div class="item">
              <div className="left">
                <img src={appLogo} alt="app logo" />
              </div>
              <div className="right">
                <h4 className="appname">Name</h4>
                <small className="appgenre">Genre</small>
                <p className="apprating">3.3 &#9733;</p>
              </div>
            </div>
          </a>
          <a href="#app">
            <div class="item">
              <div className="left">
                <img src={appLogo} alt="app logo" />
              </div>
              <div className="right">
                <h4 className="appname">Name</h4>
                <small className="appgenre">Genre</small>
                <p className="apprating">3.3 &#9733;</p>
              </div>
            </div>
          </a>
          <a href="#app">
            <div class="item">
              <div className="left">
                <img src={appLogo} alt="app logo" />
              </div>
              <div className="right">
                <h4 className="appname">Name</h4>
                <small className="appgenre">Genre</small>
                <p className="apprating">3.3 &#9733;</p>
              </div>
            </div>
          </a>
          <a href="#app">
            <div class="item">
              <div className="left">
                <img src={appLogo} alt="app logo" />
              </div>
              <div className="right">
                <h4 className="appname">Name</h4>
                <small className="appgenre">Genre</small>
                <p className="apprating">3.3 &#9733;</p>
              </div>
            </div>
          </a>
          <a href="#app">
            <div class="item">
              <div className="left">
                <img src={appLogo} alt="app logo" />
              </div>
              <div className="right">
                <h4 className="appname">Name</h4>
                <small className="appgenre">Genre</small>
                <p className="apprating">3.3 &#9733;</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="swiper">
        <h1 className="genre">Genre</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="card">
              <div className="upper">
                <a href="">
                  <img src={appImage} alt="app image" />
                </a>
              </div>

              <div className="lower">
                <div className="left">
                  <img src={appLogo} alt="app logo" />
                </div>
                <div className="right">
                  <h4 className="appname">Name</h4>
                  <small className="appgenre">Genre</small>
                  <p className="apprating">3.3 &#9733;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="upper">
                <a href="">
                  <img src={appImage} alt="app image" />
                </a>
              </div>

              <div className="lower">
                <div className="left">
                  <img src={appLogo} alt="app logo" />
                </div>
                <div className="right">
                  <h4 className="appname">Name</h4>
                  <small className="appgenre">Genre</small>
                  <p className="apprating">3.3 &#9733;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="upper">
                <a href="">
                  <img src={appImage} alt="app image" />
                </a>
              </div>

              <div className="lower">
                <div className="left">
                  <img src={appLogo} alt="app logo" />
                </div>
                <div className="right">
                  <h4 className="appname">Name</h4>
                  <small className="appgenre">Genre</small>
                  <p className="apprating">3.3 &#9733;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="upper">
                <a href="">
                  <img src={appImage} alt="app image" />
                </a>
              </div>

              <div className="lower">
                <div className="left">
                  <img src={appLogo} alt="app logo" />
                </div>
                <div className="right">
                  <h4 className="appname">Name</h4>
                  <small className="appgenre">Genre</small>
                  <p className="apprating">3.3 &#9733;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="upper">
                <a href="">
                  <img src={appImage} alt="app image" />
                </a>
              </div>

              <div className="lower">
                <div className="left">
                  <img src={appLogo} alt="app logo" />
                </div>
                <div className="right">
                  <h4 className="appname">Name</h4>
                  <small className="appgenre">Genre</small>
                  <p className="apprating">3.3 &#9733;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </body>
  );
};

export default Maher;
