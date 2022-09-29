

import { useState } from "react";
import Body from "../Body/Body";

import Result from "../Result/Result";
import { summary, time } from "../Str/Str";
import "./Home.css";

const Home = () => {
    const [sum,setSum]=useState([0]);
    const [total,setTotal]=useState([0]);
    const[show,setShow]=useState(['10s']);
    console.log(show);
const d= summary(sum);

const p=time(total);


 const timeClick=(id)=>{
   
  const secondTime=[...total,id];
  setTotal(secondTime);
   setShow(id);
 }


 const list=(id)=>{
   const arr=[...sum,id];
   setSum(arr);
 }
 


//  const [exTime,setExTime]=useState([])
//  console.log(exTime);
//  const value=0;
//  const sum=exTime.reduce((previous,current)=>previous+Number(current.time),value);
// //  console.log(sum);

//  useEffect(()=>{
//      fetch('products.json')
//      .then(res=>res.json())
//      .then(data=>setExTime(data));
//  },[])


  return (
    <div className="home">
      <div>
        <Body list={list}></Body>
      </div>
      <div>
      
        <Result 
     show={show}
        timeClick={timeClick}
     sum={d}
        >

        </Result>
      </div>
    </div>
  );
};

export default Home;
