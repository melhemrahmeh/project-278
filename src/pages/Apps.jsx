import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AppsSwiper from "./components/AppsSwiper.jsx";
import NavbarComponent from "./components/NavbarComponent";
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
  const categories = [
    "Recommended",
    "Premium",
    "Messaging",
    "Productivity",
    "Travel",
  ];
  const [apps, setApps] = useState();

  useEffect(() => {
    async function fetchApps() {
      try {
        const url = `https://google-play-store.onrender.com/api/apps`;
        const response = await axios.get(url);
        var data = response.data;
        var categorizedApps = {};
        for (let i = 0; i < categories.length; i++) {
          const category = categories[i];
          categorizedApps[category] = [];
        }

        for (let i = 0; i < data.length; i++) {
          const app = data[i];
          if (categorizedApps.hasOwnProperty(app.category)) {
            categorizedApps[app.category].push(app);
          }
        }
        setApps(categorizedApps);
      } catch (errorWhileFetchingNews) {
        console.log(
          "error while fetching applications",
          errorWhileFetchingNews
        );
      }
    }

    fetchApps();
  }, []);

  console.log(apps);

  return (
    <body>
      {/* header of the page */}
      <header>
        <NavbarComponent/>
      </header>

      {/* first part of the apps page (grid)  */}
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
          {apps.Recommended.slice(0, 10).map((app) => {
            return (
              <div class="grid-container">
                <a href={handleSubPage}>
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

      {/* Some apps Swipers */}
      <AppsSwiper genre="Premium" elements={apps.Recommended} />
      <AppsSwiper genre="Productivity" elements={apps.Recommended} />
      <AppsSwiper genre="Travel" elements={apps.Recommended} />
      <AppsSwiper genre="Messaging" elements={apps.Recommended} />
    </body>
  );
};

export default Maher;
