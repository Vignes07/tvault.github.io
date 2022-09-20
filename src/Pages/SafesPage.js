import React from "react";
import AllSafes from "../Components/AllSafes/AllSafes";
import SafesInfo from "../Components/SafesInfo/SafesInfo";
import Secrets from "../Components/Secrets/Secrets";
import "./pages.css";

function Safes() {
  return (
    <div className="container">
      <AllSafes />
      <div className="left">
        <SafesInfo />
        <Secrets />
      </div>
    </div>
  );
}

export default Safes;
