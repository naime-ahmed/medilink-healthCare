import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/header.jpg';

const Banner = () => {
    return (
        <div className="banner-style">
            <div className="banner-text">
                <h1>Your <span>Health</span> is always in the first place</h1>
                <p>We Always committed to serve our best care to you. MediLink is the number one medical care group in the World. We win 2021 health care award.</p>
                <button className="btn">See more  <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="bannerImage">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;