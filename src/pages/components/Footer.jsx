import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [country, setCountry] = useState("");
  const [flag, setFlag] = useState("");
  const url =
    "https://api.ipbase.com/v2/info?apikey=3kxyb1cZagF2jqxhlVxXpaoV2q7MazvvUOr7xw1p";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setCountry(data.data.location.country.name);

      setFlag(
        `https://flagcdn.com/48x36/${data.data.location.country.alpha2.toLowerCase()}.png`
      );
    });

  return (
    <footer className=" text-black ">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center mt-6">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/07/Google-Play-Logo.png"
            alt="Logo"
            className="w-20"
          />
          <div className="flex items-center">
            <img src={flag} alt="Country Flag" className="w-6 h-4 mr-2" />
            <p>{country}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Apps &amp; Games</h3>
            <ul>
              <Link to={`/apps`}>
                <li>Apps</li>
              </Link>
              <Link to={`/games`}>
                <li>Games</li>
              </Link>
              <Link to={`/movies`}>
                <li>Movies</li>
              </Link>
              <Link to={`/books`}>
                <li>Books</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Other </h3>
            <ul>
              <li>Terms of Service</li>
              <li>About the website</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
