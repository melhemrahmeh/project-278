import React from "react";
import "../assets/styles/grid.css";
import { useState } from "react";
import { getApps } from "../services/appsServices";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import SwiperComponent from "./components/SwiperComponent";
import Footer from "./components/Footer";

const Apps = () => {
  const { isLoading, data, isFetching } = getApps();

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-80">
        <Oval height={80} width={80} color="#111111" />
      </div>
    );
  } else {
    const categories = [
      "Recommended",
      "Premium",
      "Messaging",
      "Productivity",
      "Travel",
    ];
    var categorizedApps = {};

    if (!isLoading) {
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        categorizedApps[category] = [];
      }

      for (let i = 0; i < data.length; i++) {
        const game = data[i];
        categorizedApps[game.category].push(game);
      }
    }
    return (
      <body>
        <div>
          <div className="gridbuttons">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Top Free
            </button>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Top Grossing
            </button>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Top Paid
            </button>
          </div>
          <div className="grid">
            {data.slice(0, 12).map((app) => {
              return (
                <Link to={`/detail/${app.app_id}`}>
                  <div class="grid-container">
                    <a href="">
                      <div class="item">
                        <div className="left">
                          <img src={app.media} alt="app logo" />
                        </div>
                        <div className="right">
                          <h4 className="appname">{app.app_name}</h4>
                          <small className="appgenre">{app.category}</small>
                          <p className="apprating">{app.rating} &#9733;</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Some apps Swipers */}
        <SwiperComponent
          genre="Premium"
          elements={categorizedApps.Premium}
          type="app"
        />
        <SwiperComponent
          genre="Recommended"
          elements={categorizedApps.Recommended}
          type="app"
        />
        <SwiperComponent
          genre="Travel"
          elements={categorizedApps.Travel}
          type="app"
        />
        <SwiperComponent
          genre="Messaging"
          elements={categorizedApps.Messaging}
          type="app"
        />
        <SwiperComponent
          genre="Productivity"
          elements={categorizedApps.Productivity}
          type="app"
        />
      </body>
    );
  }
};

export default Apps;
