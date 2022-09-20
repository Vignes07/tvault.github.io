import React from "react";
import { useState, useEffect } from "react";
import { addSecret } from "../../Store/reducers/AddSafe";
import { useDispatch } from "react-redux";

import "./CreateSecrets.css";

function CreateSecrets(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.name);
  }, []);

  return (
    <div className="createSecretContainer">
      <span id="title">Add Folder</span>
      <div className="inputs">
        <div className="folderName">
          <label id="folderNameLabel">Folder Name</label>
          <input
            id="folderNameInput"
            type="text"
            name="foldername"
            placeholder="Folder Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <span id="regex">
          Please enter lowercase alphabets, numbers and underscores only.
        </span>
      </div>
      <div className="saveCancelBtn">
        <button
          id="cancelBtn"
          onClick={() => {
            props.close();
          }}
        >
          Cancel
        </button>
        <button
          id="saveBtn"
          onClick={() => {
            dispatch(
              addSecret({
                hi: name,
              })
            );
            props.close();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateSecrets;
