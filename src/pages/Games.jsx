import React, { useState } from "react";
import SwiperComponent from "./components/SwiperComponent.jsx";
import { Oval } from "react-loader-spinner";
import { getGames } from "../services/gamesServices.js";

const Games = () => {
  const [query, setQuery] = useState("");
  const { isLoading, data, isFetching } = getGames();

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-80">
        <Oval height={80} width={80} color="#111111" />
      </div>
    );
  } else {
    const categories = ["Arcade", "New", "Music", "Board", "Racing"];
    var categorizedGames = {};

    if (!isLoading) {
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        categorizedGames[category] = [];
      }

      for (let i = 0; i < data.length; i++) {
        const game = data[i];
        categorizedGames[game.category].push(game);
      }
    }
    return (
      <div>
        <div class="mb-3">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button
              class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <div className="grid">
            {data.slice(0, 12).map((app) => {
              if (app.name.toLowerCase().includes(query.toLowerCase())) {
                return (
                  <div class="grid-container">
                    <a href="">
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
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
        <SwiperComponent
          genre="Arcade"
          elements={categorizedGames.Arcade}
          type="game"
        />
        <SwiperComponent
          genre="Board"
          elements={categorizedGames.Board}
          type="game"
        />
        <SwiperComponent
          genre="New Games"
          elements={categorizedGames.New}
          type="game"
        />
        <SwiperComponent
          genre="Racing"
          elements={categorizedGames.Racing}
          type="game"
        />
        <SwiperComponent
          genre="Music"
          elements={categorizedGames.Music}
          type="game"
        />
      </div>
    );
  }
};

export default Games;
