import React, { useEffect, useState } from "react";
import Man from "../../Man/Man";
import "./Body.css";

const Body = () => {
  const [body, setBody] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setBody(data));
  }, []);
  return (
    <div className='body_part'>
    
      {body.map((item) =>(
        <Man
        key={item.id}
         items={item}>

         </Man>
      )

      
      
      )}
    </div>
  );
};

export default Body;
