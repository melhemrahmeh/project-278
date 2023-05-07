import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { deleteSession } from "../../config/session";

const Navbar = () => {
  if (localStorage.getItem("currency") === null) {
    localStorage.setItem("currency", "USD");
  }
  const [selectedCurrency, setSelectedCurrency] = useState();
  function handleCurrencyChange(currency) {
    setSelectedCurrency(currency);
    localStorage.setItem("currency", currency);
    window.location.reload(false);
  }

  const logout = async () => {
    await signOut(auth);
    deleteSession();

    navigate("/");
  };

  if (localStorage.getItem("profile") === null) {
    localStorage.setItem(
      "profile",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9X1lKYgjg1qCGQxiHQkSd7m1RYsqEqAQMyWx0SaMCKA&s"
    );
  }

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Link to={`/games`}>
            <img
              className="w-40 h-20 cursor-pointer"
              src="https://1000logos.net/wp-content/uploads/2021/07/Google-Play-Logo.png"
              alt="..."
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link to={`/games`}>
                <a className="hover:text-gray-500" href="#">
                  Games
                </a>
              </Link>
            </li>
            <li>
              <Link to={`/apps`}>
                <a className="hover:text-gray-500" href="#">
                  Apps
                </a>
              </Link>
            </li>
            <li>
              <Link to={`/movies`}>
                <a className="hover:text-gray-500" href="#">
                  Movies
                </a>
              </Link>
            </li>
            <li>
              <Link to={`/books`}>
                <a className="hover:text-gray-500" href="#">
                  Books
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] right-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="mr-10	 flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <select
                  name="Currency"
                  id="currency"
                  className="border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none"
                  value={localStorage.getItem("currency")}
                  onChange={(e) => handleCurrencyChange(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="LBP">LBP</option>
                </select>
              </li>
            </ul>
            <div className="flex flex-row flex-col items-center gap-6">
              {localStorage.getItem("session") !== null &&
              localStorage.getItem("session") ? (
                <>
                  <Link to={`/favorites`}>
                    <button className="bg-[#f77777] text-white px-5 py-2 rounded-full hover:bg-[#f77777] flex flex-row flex-col center md:items-center items-center">
                      <MdFavoriteBorder />
                      <p>Favorites</p>
                    </button>
                  </Link>

                  <div class="flex flex-wrap justify-center">
                    <div class="w-6/12 sm:w-4/12 px-4">
                      <img
                        src={localStorage.getItem("profile")}
                        alt="..."
                        class="shadow rounded-full max-w-full h-auto align-middle border-none"
                      />
                    </div>
                  </div>
                  <button
                    className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to={`/`}>
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                      Sign in
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
