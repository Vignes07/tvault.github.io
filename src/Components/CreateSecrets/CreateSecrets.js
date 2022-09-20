import React from "react";
import { useState } from "react";
import { addSecret } from "../../Store/reducers/AddSafe";
import { useDispatch } from "react-redux";

import "./CreateSecrets.css";

function CreateSecrets(props) {
  const dispatch = useDispatch();

  const [secret, setSecret] = useState([]);

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
            onChange={(e) => {
              setSecret(e.target.value);
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
                curId: props.curId,
                secret: secret,
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
