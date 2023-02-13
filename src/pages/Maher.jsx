import React from "react";
import "../assets/styles/header.css";
import Logo from "../assets/images/logo.png";

const Maher = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="play store logo" />

      <div class="navbar">
        <ul>
          <li>
            <a href="#Games">Games</a>
          </li>
          <li>
            <a href="#Apps">Apps</a>
          </li>
          <li>
            <a href="#Movies">Movies & TV</a>
          </li>
          <li>
            <a href="#Books">Books</a>
          </li>
        </ul>
      </div>

      <form action="" class="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Maher;
