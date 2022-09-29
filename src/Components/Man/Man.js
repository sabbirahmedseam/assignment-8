import React from "react";
import "./Man.css";

const Man = ({list, items }) => {
  // console.log(list);
  // console.log(props.items);
  const { paragraph, age, id, img, name, time } = items;
 
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{paragraph}</p>
        <p>
          For Age: <b>{age}</b>
        </p>
        <p>
          Time Required: <b>{time}s</b>
        </p>
        <button onClick={()=>list(items.time)} >Add to list</button>
      </div>
    </div>
  );
};

export default Man;
