import React from "react";
import "../assets/styles/grid.css";
import { Oval } from "react-loader-spinner";
import { getBooks } from "../services/booksServices";
import SwiperComponent from "./components/SwiperComponent";

const Books = () => {
  const { isLoading, data } = getBooks();

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-80">
        <Oval height={80} width={80} color="#111111" />
      </div>
    );
  } else {
    const categories = ["Romance", "Cooking", "Science", "History", "Religion"];
    var categorizedBooks = {};

    if (!isLoading) {
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        categorizedBooks[category] = [];
      }

      for (let i = 0; i < data.length; i++) {
        const game = data[i];
        categorizedBooks[game.category].push(game);
      }
    }
    console.log(categorizedBooks);
    return (
      <body>
        <SwiperComponent
          genre="Love and so :)"
          elements={categorizedBooks.Romance}
          type="book"
        />
        <SwiperComponent
          genre="More like Naked Economics: Undressing the Dismal Science"
          elements={categorizedBooks.Science}
          type="book"
        />
        <SwiperComponent
          genre="Mystery & History"
          elements={categorizedBooks.History}
          type="book"
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
            {data.slice(0, 12).map((book) => {
              return (
                <div class="grid-container">
                  <a href="">
                    <div class="item">
                      <div className="left">
                        <img src={book.media} alt="app logo" />
                      </div>
                      <div className="right">
                        <h4 className="appname">{book.name}</h4>
                        <small className="appgenre">{book.category}</small>
                        <p className="apprating">{book.rating} &#9733;</p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <SwiperComponent
          genre="Self-Help eBooks"
          elements={categorizedBooks.History}
          type="book"
        />
        <SwiperComponent
          genre="Biographies & Memoirs"
          elements={categorizedBooks.History}
          type="book"
        />
      </body>
    );
  }
};

export default Books;
