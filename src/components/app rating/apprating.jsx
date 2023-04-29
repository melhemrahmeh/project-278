import React from 'react';
import "../../assets/styles/AppDetail.css";


function AppRating(props) {
  return (
    <div className="AppRating">
      <span className="AppRating-number"> {props.rating} </span>{" "}
      <i className="fas fa-star AppRating-star"> </i>{" "}
    </div>
  );
}

export default AppRating;