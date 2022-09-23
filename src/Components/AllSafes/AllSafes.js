import React, { useState, useEffect } from "react";
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

  const [res, setres] = useState(safesList);

  const [input, setinput] = useState("");

  useEffect(() => {
    if (input === "") {
      setres(safesList);
    } else {
      const filter = safesList.filter((value) => {
        return value.name.toLowerCase().includes(input.toLowerCase());
      });
      setres(filter);
    }
  }, [input, safesList]);

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  // const handleChange = (e) => {
  //   // setinput(e.target.value);
  //   const filter = e.target.value.filter((value) => {
  //     return value.name.toLowerCase().includes(e.target.value.toLowerCase());
  //   });

  //   if (e.target.value === "") {
  //     setres(safesList);
  //   } else {
  //     setres(filter);
  //   }
  // };

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
          {<Safes safesList={res} setRes={setres} />}
          {/* {res.length === 0 && <Safes safesList={safesList} />} */}
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
