import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import MoviesSwiper from "./components/MoviesSwiper.jsx";
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
  const categories = ["Romance", "Cooking", "Science", "History", "Religion"];
  const [books, setBooks] = useState();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const url = `https://google-play-store.onrender.com/api/books`;
        const response = await axios.get(url);
        var data = response.data;
        var categorizedBooks = {};
        for (let i = 0; i < categories.length; i++) {
          const category = categories[i];
          categorizedBooks[category] = [];
        }

        for (let i = 0; i < data.length; i++) {
          const book = data[i];
          if (categorizedBooks.hasOwnProperty(book.category)) {
            categorizedBooks[book.category].push(book);
          }
        }
        setBooks(categorizedBooks);
      } catch (errorWhileFetchingNews) {
        console.log("error while fetching books", errorWhileFetchingNews);
      }
    }

    fetchBooks();
  }, []);

  console.log(books);

  return (
    <body>
      {/* header of the page */}
      <header>
        <NavbarComponent/>
      </header>

      {/* three swipers before the grid  */}
      <MoviesSwiper genre="Top-selling comics" elements={books.History} />
      <MoviesSwiper
        genre="More like Naked Economics: Undressing the Dismal Science"
        elements={books.History}
      />
      <MoviesSwiper genre="Mystery & Thrillers" elements={books.History} />

      {/* grid part of the page  */}
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
          {books.History.slice(0, 10).map((book) => {
            return (
              <div class="grid-container">
                <a href={handleSubPage}>
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

      {/* More Books Swipers */}
      <MoviesSwiper genre="Self-Help eBooks" elements={books.History} />
      <MoviesSwiper genre="Biographies & Memoirs" elements={books.History} />
    </body>
  );
};

export default Maher;
