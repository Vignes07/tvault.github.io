import React from "react";
import background from "./assets/Banner_img.png";
import "./SafesInfo.css";

import { useSelector } from "react-redux";

function SafesInfo() {
  const curId = useSelector((state) => state.safes.curId);

  const safeList = useSelector((state) => state.safes.value);

  return (
    <div className="info">
      <img className="infoImg" src={background} alt="" />
      {safeList.map((value) => {
        return value.id === curId.id ? (
          <div key={value.id} className="nameDesc">
            <span id="nameInfo">{value.name}</span>
            <span id="descInfo">{value.description}</span>
          </div>
        ) : (
          ""
        );
      })}
      {safeList.length === 0 ? (
        <div className="nameDesc">
          <span id="nameInfo">No Safes Created Yet</span>
          <span id="descInfo">
            Create a Safe to see your secrets, folders and permissions here
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SafesInfo;
