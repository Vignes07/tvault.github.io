import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import addFolder from "./assets/folder-plus 1.png";
// import secretsImage from "./assets/Group 14275.png";
import "./Secrets.css";
import Popup from "reactjs-popup";
import CreateSecrets from "../CreateSecrets/CreateSecrets";

// import { removeSafe } from "../../Store/reducers/AddSafe";
// import { useSelector } from "react-redux";

function Secrets(props) {
  // const dispatch = useDispatch();
  // const safesList = useSelector((state) => state.safes.value);

  return (
    <div className="secretsContainer">
      <div className="secretsHeader">
        <div className="sectretsTitle">
          <span className="secretsNav">Secrets</span>
        </div>
        <div className="folderIcon">
          <span className="addFolder">Add Folder</span>

          <Popup
            trigger={<img className="addFolderIcon" src={addFolder} alt="" />}
            modal
            nested
          >
            {(close) => <CreateSecrets close={close} />}
          </Popup>
        </div>
      </div>
      <span id="secretsCount">0 Secrets</span>
      {/* <div className="secretsImageBackground">
        <img id="secretsImage" src={secretsImage} alt="" />
        <p id="addSecretsInfo">
          Add a <span>Folder</span> and then you'll be able to add{" "}
          <span>Secrets</span> to view them all here
        </p>
      </div>
      <div className="addSecrets">
        <Popup
          trigger={
            <button id="addSecretsBtn">
              <FontAwesomeIcon className="faPlus" icon={faPlus} />
              <span id="addBtnText">Add</span>
            </button>
          }
          modal
          nested
        >
          {(close) => <CreateSecrets close={close} />}
        </Popup>
      </div> */}
    </div>
  );
}

export default Secrets;
