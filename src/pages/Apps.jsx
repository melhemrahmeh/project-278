import React from "react";
import "../assets/styles/header.css";
import "../assets/styles/grid.css";
import { useState, useEffect } from "react";
import AppsSwiper from "./components/AppsSwiper.jsx";
import { BsSearch } from "react-icons/bs";

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

      {/* Some apps Swipers */}
      <AppsSwiper genre="Premium" elements={apps.Recommended} />
      <AppsSwiper genre="Productivity" elements={apps.Recommended} />
      <AppsSwiper genre="Travel" elements={apps.Recommended} />
      <AppsSwiper genre="Messaging" elements={apps.Recommended} />
    </body>
  );
};

export default Maher;
