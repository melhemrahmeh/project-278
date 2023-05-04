import React from "react";
import { FaBook, FaStar, FaFileAlt } from "react-icons/fa";
import "../../assets/styles/AppDetail.css";

function IconRow() {
  return (
    <div className="icon-row">
      <div className="icon-container">
        <FaBook size={15} />
        <div className="icon-text">Ebook</div>
      </div>
      <div className="icon-line"></div>
      <div className="icon-container">
        <FaStar size={15} />
        <div className="icon-text">4.5/5.0</div>
      </div>
      <div className="icon-line"></div>
      <div className="icon-container">
        <FaFileAlt size={15} />
        <div className="icon-text">245 pages</div>
      </div>
    </div>
  );
}

export default IconRow;
