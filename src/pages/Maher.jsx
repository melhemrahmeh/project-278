import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SwiperComponent from "./components/SwiperComponent.jsx";
import NavbarComponent from "./components/NavbarComponent.jsx";
import axios from "axios";

import "../assets/styles/header.css";
import "../assets/styles/grid.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Maher = () => {
  const navigate = useNavigate();

  function handleSubPage(event) {
    navigate('/details');
  }

  //fetching the data from the API and inserting them to different arrays according to the genre
  const categories = ["Arcade", "New", "Music", "Board", "Racing"];
  const [games, setGames] = useState();

  useEffect(() => {
    async function fetchGames() {
      try {
        const url = `https://google-play-store.onrender.com/api/games`;
        const response = await axios.get(url);
        var data = response.data;
        var categorizedGames = {};
        for (let i = 0; i < categories.length; i++) {
          const category = categories[i];
          categorizedGames[category] = [];
        }

        for (let i = 0; i < data.length; i++) {
          const game = data[i];
          if (categorizedGames.hasOwnProperty(game.category)) {
            categorizedGames[game.category].push(game);
          }
        }
        setGames(categorizedGames);
      } catch (errorWhileFetchingNews) {
        console.log("error while fetching games", errorWhileFetchingNews);
      }
    }

    fetchGames();
  }, []);

  console.log(games);

  return (
    <body>
      {/* header of the main page */}
      <header>
        <NavbarComponent/>
      </header>

      {/* first part of the main page  */}
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
          {games.New.slice(0, 10).map((app) => {
            return (
              <div class="grid-container">
                <a href={handleSubPage}>
                  <div class="item">
                    <div className="left">
                      <img src={app.media} alt="app logo" />
                    </div>
                    <div className="right">
                      <h4 className="appname">{app.name}</h4>
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

      {/* swiper for each category of applications  */}
      <SwiperComponent genre="Recommended for you" elements={games.New} />
      <SwiperComponent genre="Offline Games" elements={games.New} />
      <SwiperComponent genre="Top-rated games" elements={games.New} />
      <SwiperComponent genre="Strategy games" elements={games.New} />
    </body>
  );
};

export default Maher;
