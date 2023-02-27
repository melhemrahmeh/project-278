import React from "react";
import "../assets/styles/header.css";
import Logo from "../assets/images/logo.png";

const Maher = () => {
  return (
    <header>
      <nav class="navbar container">
        <img className="logo" src={Logo} alt="play store logo" />
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Games
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Apps
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Movies & TV
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Books
            </a>
          </li>
          <div class="active"></div>
        </ul>
      </nav>
    </header>
  );
};

export default Maher;
