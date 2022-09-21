import React from "react";
import { useParams } from "react-router-dom";

function VaultAppRoles() {
  let { id } = useParams();
  return (
    <div style={{ color: "white" }}>
      VaultAppRoles <br></br> {id}
    </div>
  );
}

export default VaultAppRoles;
