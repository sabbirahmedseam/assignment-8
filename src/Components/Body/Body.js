import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import Man from "../Man/Man";
// import { summary } from "../Str/Str";

import "./Body.css";

const Body = ({ list }) => {
  const [body, setBody] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setBody(data));
  }, []);

  return (
    <div className="active">
      <div className="icon">
        <FontAwesomeIcon className="emoji" icon={faDumbbell}></FontAwesomeIcon>
        <h1 className="boost">BOOST-ACTIVE-CLUB</h1>
      </div>
      <h4>Select today's exercise</h4>
      <div className="body_part">
        {body.map((item) => (
          <Man list={list} key={item.id} items={item}></Man>
        ))}
      </div>
    </div>
  );
};

export default Body;
