import React from 'react';
import './../Dashboard/HomeStyle.css'
import img from './../Dashboard/icon.png'
import HomeImage from './HomeImage';
const Home = () => {
    return (
        <div className='home'>
           
           <div className='body'>
            <HomeImage/>
           </div>
        </div>
    );
};

export default Home;