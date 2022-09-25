import React, { useState, useEffect } from "react";
import AllSafes from "../Components/AllSafes/AllSafes";
import SafesInfo from "../Components/SafesInfo/SafesInfo";
import Secrets from "../Components/Secrets/Secrets";
import "./pages.css";

import { useSelector } from "react-redux";

function Safes() {
  const safesList = useSelector((state) => state.safes.value);
  const curId = useSelector((state) => state.safes.curId);

  const [res, setres] = useState(safesList);
  const [filteredId, setfilteredId] = useState(curId.id);

  const [input, setinput] = useState("");

  useEffect(() => {
    if (input === "") {
      setres(safesList);
      setfilteredId(curId.id);
    } else {
      const filter = safesList.filter((value) => {
        return value.name.toLowerCase().includes(input.toLowerCase());
      });
      setres(filter);
      filter.length > 0 ? setfilteredId(filter[0].id) : setfilteredId(0);
    }
  }, [input, safesList]);

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  return (
    <div className="main">
      <div className="container">
        <AllSafes
          res={res}
          setres={setres}
          safesList={safesList}
          handleChange={handleChange}
          setfilteredId={setfilteredId}
        />
        <div className="left">
          <SafesInfo safesList={res} curId={filteredId} />
          <Secrets curId={filteredId} />
        </div>
      </div>
    </div>
  );
}

export default Safes;
