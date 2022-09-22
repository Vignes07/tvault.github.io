import React from "react";
import UpdateSafe from "../UpdateSafe/UpdateSafe";
import Popup from "reactjs-popup";

import { setCurId } from "../../Store/reducers/AddSafe";

import "./Safes.css";
import ShieldLogo from "./assets/icon_safe.png";

import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { removeSafe } from "../../Store/reducers/AddSafe";
import { useDispatch, useSelector } from "react-redux";

function Safes(props) {
  const dispatch = useDispatch();

  const curId = useSelector((state) => state.safes.curId);

  function stop(e) {
    e.stopPropagation();
  }

  return (
    <div className="safesListContainer">
      {props.safesList.length > 0 &&
        props.safesList.map((safes) => {
          return (
            <div
              key={safes.id}
              className={
                safes.id === curId.id
                  ? "safesContainerActive"
                  : "safesContainer"
              }
              onClick={() => {
                dispatch(
                  setCurId({
                    id: safes.id,
                  })
                );
              }}
            >
              <div className="safesInfo">
                <div className="shieldLogo">
                  <img id="ShieldLogo-1" src={ShieldLogo} alt="" />
                </div>
                <div className="safesDetails">
                  <span id="safeName">{safes.name}</span>
                  <span id="lastUpdated">Last Updated: a day ago</span>
                </div>
              </div>
              <div
                className={
                  safes.id === curId.id ? "editRemove" : "editRemoveNone"
                }
              >
                <Popup
                  trigger={
                    <FontAwesomeIcon
                      className="faPenToSquare"
                      icon={faPenToSquare}
                    />
                  }
                  modal
                >
                  {(close) => (
                    <UpdateSafe
                      id={safes.id}
                      name={safes.name}
                      owner={safes.owner}
                      type={safes.type}
                      description={safes.description}
                      secret={safes.secret}
                      close={close}
                    />
                  )}
                </Popup>
                <FontAwesomeIcon
                  className="faTrashCan"
                  icon={faTrashCan}
                  onClick={(e) => {
                    stop(e);
                    dispatch(
                      removeSafe({
                        id: safes.id,
                      })
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Safes;
