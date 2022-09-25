import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import addFolder from "./assets/folder-plus 1.png";
import addFolderInactive from "./assets/icon_addfolder_inactive.png";
import folder from "./assets/folder.png";
import folderActive from "./assets/folder-active.png";

import secretsImage from "./assets/Group 14275.png";
import "./Secrets.css";
import Popup from "reactjs-popup";
import CreateSecrets from "../CreateSecrets/CreateSecrets";

import { removeSecret } from "../../Store/reducers/AddSafe";
import { useSelector, useDispatch } from "react-redux";

function Secrets(props) {
  const dispatch = useDispatch();
  // const curId = useSelector((state) => state.safes.curId);
  const curId = props.curId;

  const secretList = useSelector((state) => state.safes.value);

  return (
    <div className="secretsContainer">
      <div className="secretsHeader">
        <div className="sectretsTitle">
          <span className="secretsNav">Secrets</span>
        </div>
        <div className="folderIcon">
          {/* <span className="addFolder">Add Folder</span> */}

          {secretList.length > 0 && curId !== 0 && (
            <Popup
              trigger={
                <div id="popupSecret">
                  <span className="addFolder">Add Folder</span>
                  <img className="addFolderIcon" src={addFolder} alt="" />
                </div>
              }
              modal
              nested
            >
              {(close) => <CreateSecrets curId={curId} close={close} />}
            </Popup>
          )}
          {(secretList.length === 0 || curId === 0) && (
            <div id="popupSecret">
              <span className="addFolder">Add Folder</span>
              <img className="addFolderIcon" src={addFolderInactive} alt="" />
            </div>
          )}
        </div>
      </div>

      <div>
        {secretList.map((value, index) => {
          return (
            secretList.length !== 0 &&
            value.id === curId && (
              <div key={index}>
                <span id="secretsCount">{value.secret.length} Secrets</span>
              </div>
            )
          );
        })}
      </div>

      <div>
        {(secretList.length === 0 || curId === 0) && (
          <div>
            <span id="secretsCount">0 Secrets</span>
            <div className="secretsImageBackground">
              <img id="secretsImage" src={secretsImage} alt="" />
              <p id="addSecretsInfo">
                Add a <span>Folder</span> and then you'll be able to add{" "}
                <span>Secrets</span> to view them all here
              </p>
            </div>
            <div className="addSecrets">
              {secretList.length > 0 && curId !== 0 && (
                <Popup
                  trigger={
                    <button id="addSecretsBtnActive">
                      <FontAwesomeIcon className="faPlus" icon={faPlus} />
                      <span id="addBtnText">Add</span>
                    </button>
                  }
                  modal
                >
                  {(close) => <CreateSecrets curId={curId} close={close} />}
                </Popup>
              )}
              {secretList.length === 0 ||
                (curId === 0 && (
                  <button id="addSecretsBtn">
                    <FontAwesomeIcon className="faPlus" icon={faPlus} />
                    <span id="addBtnText">Add</span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>

      <div>
        {secretList.map((value) => {
          return (
            value.id === curId &&
            value.secret.length === 0 && (
              <div key={value.id}>
                <div className="secretsImageBackground">
                  <img id="secretsImage" src={secretsImage} alt="" />
                  <p id="addSecretsInfo">
                    Add a <span>Folder</span> and then you'll be able to add{" "}
                    <span>Secrets</span> to view them all here
                  </p>
                </div>
                <div className="addSecrets">
                  {secretList.length > 0 && (
                    <Popup
                      trigger={
                        <button id="addSecretsBtnActive">
                          <FontAwesomeIcon className="faPlus" icon={faPlus} />
                          <span id="addBtnText">Add</span>
                        </button>
                      }
                      modal
                    >
                      {(close) => <CreateSecrets curId={curId} close={close} />}
                    </Popup>
                  )}
                  {secretList.length === 0 && (
                    <button id="addSecretsBtn">
                      <FontAwesomeIcon className="faPlus" icon={faPlus} />
                      <span id="addBtnText">Add</span>
                    </button>
                  )}
                </div>
              </div>
            )
          );
        })}
      </div>

      <div className="secrets">
        {secretList.map((value) => {
          return value.id === curId ? (
            <div key={value.id}>
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
                              secret: x,
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
