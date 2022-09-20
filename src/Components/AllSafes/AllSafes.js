import React from "react";
import "./AllSafes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import image from "./assets/Group 12687.png";
import CreateSafe from "../CreateSafes/CreateSafe";
import Popup from "reactjs-popup";
import Safes from "../Safes/Safes";

import { useSelector } from "react-redux";

function AllSafes() {
  const safesList = useSelector((state) => state.safes.value);

  return (
    <div className="allSafes">
      <header className="safesHeader">
        <p>
          <span id="text">All Safes</span>
          <span id="count">({safesList.length})</span>
        </p>
        <div className="searchContainer">
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          <input className="searchField" type={"text"} placeholder={"Search"} />
        </div>
      </header>
      <div className="safesList">
        <div className="safes">
          <Safes safesList={safesList} />
        </div>
        <div className="noSafesInfo">
          <img className="addImage" src={image} alt={"#"} />
          <p>
            <span id="createText">Create a Safe and get started!</span>
          </p>
          <Popup
            trigger={
              <button className="addBtn">
                <FontAwesomeIcon className="plusIcon" icon={faPlus} />
              </button>
            }
            modal
          >
            {(close) => <CreateSafe close={close} />}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default AllSafes;
