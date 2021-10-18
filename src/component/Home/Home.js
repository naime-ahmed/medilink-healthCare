import React from 'react';
import Banner from './Banner/Banner';
import HealthCheck from './HealthCheck/HealthCheck';
import './Home.css';
import Blogs from './Services/Blogs/Blogs';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className="home-style">
            <Banner />
            <Services />
            <Blogs />
            <HealthCheck/>
        </div>
    );
};

export default Home;