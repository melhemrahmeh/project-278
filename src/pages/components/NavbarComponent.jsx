import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import "../assets/styles/header.css";
import Logo2 from "../assets/images/logo2.png";
import user from "../assets/images/user.png";

const NavbarComponent = () => {
    const [show, setShow] = useState(true);

    //navigate between the different pages in the navbar
    const navigate = useNavigate();      
    function handleGames(event) {
        navigate('/maher');
    }
    function handleApps(event) {
        navigate('/apps');
    }
    function handleMovies(event) {
        navigate('/movies');
    }
    function handleBooks(event) {
        navigate('/books');
    }

  return (
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
              <a href={handleGames} className="nav-link">Games</a>
            </li>
            <li className="nav-item">
              <a href={handleApps} className="nav-link">Apps</a>
            </li>
            <li className="nav-item">
              <a href={handleMovies} className="nav-link">Movies & TV</a>
            </li>
            <li className="nav-item">
              <a href={handleBooks} className="nav-link">Books</a>
            </li>
            <li>
              <a>
                <img src={user} alt="user" className="user" />
              </a>
            </li>
            <div className="active"></div>
          </ul>
        </nav>
  )
}

export default NavbarComponent