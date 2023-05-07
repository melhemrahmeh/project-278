import React from "react";
import { Oval } from "react-loader-spinner";
import { getMovies } from "../services/moviesServices";
import SwiperComponent from "./components/SwiperComponent";

const Movies = () => {
  const { isLoading, data, isFetching } = getMovies();

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-80">
        <Oval height={80} width={80} color="#111111" />
      </div>
    );
  } else {
    const categories = [
      "Action",
      "Animation",
      "Comedy",
      "Documentary",
      "History",
    ];
    var categorizedMovies = {};

    if (!isLoading) {
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        categorizedMovies[category] = [];
      }

      for (let i = 0; i < data.length; i++) {
        const game = data[i];
        categorizedMovies[game.category].push(game);
      }
    }

    return (
      <body>
        <SwiperComponent
          genre="New Movies"
          elements={categorizedMovies.Animation}
          type="movie"
        />
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
            {data.slice(0, 12).map((movie) => {
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
        <SwiperComponent
          genre="Action"
          elements={categorizedMovies.Action}
          type="movie"
        />
        <SwiperComponent
          genre="Animation"
          elements={categorizedMovies.Animation}
          type="movie"
        />
        <SwiperComponent
          genre="Comedy"
          elements={categorizedMovies.Comedy}
          type="movie"
        />
        <SwiperComponent
          genre="Documentary"
          elements={categorizedMovies.Documentary}
          type="movie"
        />
        <SwiperComponent
          genre="History"
          elements={categorizedMovies.History}
          type="movie"
        />
      </body>
    );
  }
};

export default Movies;
