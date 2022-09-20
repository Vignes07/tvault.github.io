import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import addFolder from "./assets/folder-plus 1.png";
import folder from "./assets/folder.png";
import folderActive from "./assets/folder-active.png";

// import secretsImage from "./assets/Group 14275.png";
import "./Secrets.css";
import Popup from "reactjs-popup";
import CreateSecrets from "../CreateSecrets/CreateSecrets";

import { removeSecret } from "../../Store/reducers/AddSafe";
import { useSelector, useDispatch } from "react-redux";

function Secrets() {
  const dispatch = useDispatch();
  const curId = useSelector((state) => state.safes.curId);

  const secretList = useSelector((state) => state.safes.value);

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
            {(close) => <CreateSecrets curId={curId.id} close={close} />}
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

      <div className="secrets">
        {secretList.map((value, index) => {
          return value.id === curId.id ? (
            <div key={index}>
              {value.secret.map((x, index) => {
                return (
                  <div key={index} className="secretList">
                    <div className="secretName">
                      <div className="folderIcon">
                        <img className="folder" src={folder} alt="" />
                        <img
                          className="folderActive"
                          src={folderActive}
                          alt=""
                        />
                      </div>
                      <div className="secretDetails">
                        <span>{x}</span>
                        <span id="lastUpdated">Last Updated: a day ago</span>
                      </div>
                    </div>
                    <div className="remove">
                      <FontAwesomeIcon
                        className="faTrashCan"
                        icon={faTrashCan}
                        onClick={() =>
                          dispatch(
                            removeSecret({
                              id: x,
                            })
                          )
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Secrets;
