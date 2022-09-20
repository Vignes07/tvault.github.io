import React from "react";
import { useState, useEffect } from "react";
import { updateSafe } from "../../Store/reducers/AddSafe";
import { useDispatch } from "react-redux";

import "./UpdateSafe.css";
import ShieldLogo from "./assets/icon_safe.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function UpdateSafe(props) {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setId(props.id);
    setName(props.name);
    setOwner(props.owner);
    setType(props.type);
    setDescription(props.description);
  }, []);

  return (
    <div className="createSafeContainer">
      <div className="information">
        <span id="title">Create Safe</span>
        <div className="safesInfo">
          <div className="shieldLogo">
            <img id="ShieldLogo" src={ShieldLogo} alt="" />
          </div>
          <div className="infoDetails">
            <p id="details">
              A Safe is a logical unit to store the secrets. All the safes are
              created within Vault. You can control access only at the safe
              level. As a vault administrator you can manage safes but cannot
              view the content of the safe.
            </p>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="safeName">
          <label id="safeNameLabel">Safe Name</label>
          <input
            id="safeNameInput"
            type="text"
            name="safeName"
            placeholder="Safe Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="owner">
          <label id="ownerLabel">Owner</label>
          <input
            id="ownerInput"
            type="text"
            name="owner"
            placeholder="Owner"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          />
        </div>
        <div className="type">
          <label id="safeTypeLabel">Type</label>
          <select
            id="typeInput"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="description">
          <label id="descLabel">Description</label>
          <textarea
            id="descInput"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <span id="minChar">Please add a minimum of 10 characters</span>
        </div>
      </div>
      <div className="createCancelBtn">
        <button
          id="cancelBtn"
          onClick={() => {
            props.close();
          }}
        >
          Cancel
        </button>
        <button
          id="createBtn"
          onClick={() => {
            dispatch(
              updateSafe({
                id: id,
                name: name,
                owner: owner,
                type: type,
                description: description,
              })
            );
            props.close();
          }}
        >
          <FontAwesomeIcon id="faPlus" icon={faPlus} />
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateSafe;
