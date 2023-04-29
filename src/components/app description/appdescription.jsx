import React from "react";
import "../../assets/styles/AppDetail.css";

function AppDescription(props) {
  return (
    <div className="AppDescription">
      <h2 className="AppDescription-title"> {props.appName} </h2>
      <p className="AppDescription-text"> {props.description} </p>
    </div>
  );
}

export default AppDescription;
