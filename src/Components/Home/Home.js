

import { useState } from "react";
import Body from "../Body/Body";

import Result from "../Result/Result";
import "./Home.css";

const Home = () => {
    const [sum,setSum]=useState([]);
    // console.log(sum);
 const timeClick=(id)=>{
    // console.log(id);
 }

  const arr=[];
 const list=(id)=>{
   
// console.log(id);
arr.push(id);
console.log(arr);
const total=arr.reduce((previous,current)=>previous+Number(current),0);
console.log(total);
setSum(total);
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
        timeClick={timeClick}
     
        >

        </Result>
      </div>
    </div>
  );
};

export default Home;
