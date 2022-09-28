import React from 'react';
import Body from '../Body/Body';
import Result from '../Result/Result';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
         
           <div  >
            <Body></Body>
           </div>
           <div>
            <Result></Result>
           </div>
        </div>
    );
};

export default Home;