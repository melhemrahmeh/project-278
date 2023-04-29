import React from "react";
import "../../assets/styles/AppDetail.css";

function AppIcon(props) {
  return (
    <div className="AppIcon">
      <img className="AppIcon-image" src={props.src} alt={props.alt} />{" "}
    </div>
  );
}

export default AppIcon;
