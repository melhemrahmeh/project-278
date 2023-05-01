import React from "react";
import "../assets/styles/header.css";
import "../assets/styles/grid.css";
import { useState, useEffect } from "react";
import MoviesSwiper from "./components/MoviesSwiper.jsx";
import { BsSearch } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Logo2 from "../assets/images/logo2.png";
import user from "../assets/images/user.png";

const Maher = () => {
  const [show, setShow] = useState(true);

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

      {/* More Books Swipers */}
      <MoviesSwiper genre="Self-Help eBooks" elements={books.History} />
      <MoviesSwiper genre="Biographies & Memoirs" elements={books.History} />
    </body>
  );
};

export default Maher;
