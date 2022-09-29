import React, { useEffect, useState } from "react";
import Man from "../Man/Man";
// import { summary } from "../Str/Str";

import "./Body.css";

const Body = ({list}) => {
  const [body, setBody] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setBody(data));
  }, []);
 
  return (
   <div>
    <h1>body</h1>
     <div className='body_part'>
    
    {body.map((item) =>(
      <Man
     list={list}
    key={item.id}
      items={item}
      >

      </Man>
    )

    
    
    )}
  </div>
   </div>
  );
};

export default Body;
