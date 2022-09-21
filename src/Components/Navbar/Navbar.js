import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "./assets/logo.svg";
import Safes from "../../Pages/SafesPage";
import VaultAppRoles from "../../Pages/VaultAppRoles";
import "./Navbar.css";

function Navbar() {
  const shadow = {
    boxShadow: "0 5px 25px #72134b",
  };

  return (
    <BrowserRouter>
      <nav className="header" style={shadow}>
        <div className="logo">
          <img src={logo} alt={""} />
        </div>
        <div className="linkItems">
          <Link className="active links" to="/">
            Safes
          </Link>
          <Link className="links" to="/vaultapproles/data=hello">
            Vault App Roles
          </Link>
          <Link className="links" to="/service">
            Service Accounts
          </Link>
          <Link className="links" to="/iam">
            IAM Service Accounts
          </Link>
          <Link className="links" to="/azure">
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
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
