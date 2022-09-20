import React from "react";
import background from "./assets/Banner_img.png";
import "./SafesInfo.css";

function SafesInfo() {
  return (
    <div className="info">
      <img className="infoImg" src={background} alt="" />
      <div className="nameDesc">
        <span id="nameInfo">Owner</span>
        <span id="descInfo">Description</span>
      </div>
    </div>
  );
}

export default SafesInfo;
