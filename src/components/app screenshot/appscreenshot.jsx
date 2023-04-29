import React from "react";
import "../../assets/styles/AppDetail.css";

function AppScreenshot(props) {
  return (
    <div className="AppScreenshot">
      <img className="AppScreenshot-image" src={props.src} alt={props.alt} />{" "}
      <p className="AppScreenshot-caption"> {props.caption} </p>{" "}
    </div>
  );
}

export default AppScreenshot;
