import React from 'react';
import './../Dashboard/HomeImageStyle.css'
import img from './../Dashboard/banner.png'

const HomeImage = () => {
    return (
        <div className='banner'>
                <img src={img} alt="banner image" className='bannerImg' />
                <div className='head'>
                <div className='heading'> Welcome to Star Wars Dashboard </div>
                    <div></div>
                </div>
               
                <div className='description'> Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. </div>

        </div>
    );
};

export default HomeImage;