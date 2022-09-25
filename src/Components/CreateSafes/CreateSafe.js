import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { setCurId, addSafe } from "../../Store/reducers/AddSafe";
import { useDispatch, useSelector } from "react-redux";

import "./CreateSafe.css";
import ShieldLogo from "./assets/icon_safe.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateSafe(props) {
  const dispatch = useDispatch();

  const safesList = useSelector((state) => state.safes.value);

  const uid = uuid();
  const id = uid.slice(0, 6);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [secret] = useState([]);

  const [exists, setexists] = useState(true);

  useEffect(() => {
    function safeExists(n) {
      return safesList.some(function (el) {
        return el.name === n;
      });
    }
    setexists(safeExists(name));
  }, [name, safesList]);

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
          <label id="safeNameLabel">
            Safe Name &emsp;
            {exists ? (
              <label id="alreadyExists">* Safe already exists</label>
            ) : (
              ""
            )}
          </label>
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
            <option value={"Personal"}>Personal</option>
            <option value={"Other"}>Other</option>
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
        {description.length < 10 ||
        name.length < 1 ||
        owner.length < 1 ||
        exists ? (
          <button disabled={true} id="createBtnDisabled">
            <FontAwesomeIcon id="faPlus" icon={faPlus} />
            Create
          </button>
        ) : (
          <button
            id="createBtn"
            onClick={() => {
              dispatch(
                addSafe({
                  id: id,
                  name: name,
                  owner: owner,
                  type: type,
                  description: description,
                  secret: secret,
                })
              );
              dispatch(
                setCurId({
                  id: id,
                })
              );
              props.close();
            }}
          >
            <FontAwesomeIcon id="faPlus" icon={faPlus} />
            Create
          </button>
        )}
        {/* {description.length >= 10 && name.length > 1 && owner.length > 1 && (
          <button
            id="createBtn"
            onClick={() => {
              dispatch(
                addSafe({
                  id: id,
                  name: name,
                  owner: owner,
                  type: type,
                  description: description,
                  secret: secret,
                })
              );
              dispatch(
                setCurId({
                  id: id,
                })
              );
              props.close();
            }}
          >
            <FontAwesomeIcon id="faPlus" icon={faPlus} />
            Create
          </button>
        )} */}
      </div>
    </div>
  );
}

export default CreateSafe;
