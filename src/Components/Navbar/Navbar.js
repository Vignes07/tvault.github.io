import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "./assets/logo.svg";
import Safes from "../../Pages/SafesPage";
import VaultAppRoles from "../../Pages/VaultAppRoles";
import Services from "../../Pages/ServiceAccounts";
import IAM from "../../Pages/IAMServices";
import Azure from "../../Pages/Azure";
import "./Navbar.css";

function Navbar() {
  const shadow = {
    boxShadow: "0 5px 25px #72134b",
  };

  const [isActive, setisActive] = useState(1);

  return (
    <BrowserRouter forceRefresh={true}>
      <nav className="header" style={shadow}>
        <div className="logo">
          <img src={logo} alt={""} />
        </div>
        <div className="linkItems">
          <Link
            className={isActive === 1 ? "active" : "links"}
            to="/"
            onClick={() => setisActive(1)}
          >
            Safes
          </Link>
          <Link
            className={isActive === 2 ? "active" : "links"}
            to="/vaultapproles/data=hello"
            onClick={() => setisActive(2)}
          >
            Vault App Roles
          </Link>
          <Link
            className={isActive === 3 ? "active" : "links"}
            to="/service"
            onClick={() => setisActive(3)}
          >
            Service Accounts
          </Link>
          <Link
            className={isActive === 4 ? "active" : "links"}
            to="/iam"
            onClick={() => setisActive(4)}
          >
            IAM Service Accounts
          </Link>
          <Link
            className={isActive === 5 ? "active" : "links"}
            to="/azure"
            onClick={() => setisActive(5)}
          >
            Azure Active Directory
          </Link>
        </div>
        <div className="account">
          <div className="documents">
            <FontAwesomeIcon className="fileIcon" icon={faFile} />
            <p>
              <span>Documents</span>
            </p>
          </div>
          <div className="user">
            <FontAwesomeIcon className="userIcon" icon={faUser} />
            <p>
              <span>(Admin) Davis R.</span>
            </p>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Safes />} />
        <Route path="/vaultapproles/:id" element={<VaultAppRoles />} />
        <Route path="/service" element={<Services />} />
        <Route path="/iam" element={<IAM />} />
        <Route path="/azure" element={<Azure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
