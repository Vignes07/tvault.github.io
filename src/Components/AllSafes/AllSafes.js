import React, { useState } from "react";
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

  const [result, setResult] = useState(
    useSelector((state) => state.safes.value)
  );

  console.log(result);

  const handleChange = (e) => {
    const filter = safesList.filter((value) => {
      return value.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    console.log(e.target.value);

    if (e.target.value === "") {
      console.log(safesList);
      setResult(safesList);
    } else {
      setResult(filter);
    }
  };

  return (
    <div className="allSafes">
      <header className="safesHeader">
        <p>
          <span id="text">All Safes</span>
          <span id="count">({safesList.length})</span>
        </p>
        <div className="searchContainer">
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          <input
            className="searchField"
            type={"text"}
            placeholder={"Search"}
            onChange={handleChange}
          />
        </div>
      </header>
      <div className="safesList">
        <div className="safes">
          {result.length !== 0 && <Safes safesList={result} />}
          {result.length === 0 && <Safes safesList={safesList} />}
        </div>
        <div className={safesList.length > 0 ? "hasSafes" : "noSafesInfo"}>
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
