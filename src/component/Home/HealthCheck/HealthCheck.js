import React from 'react';
import './HealthCheck.css';
import image from '../../../images/health-check.jpg';

const HealthCheck = () => {
    return (
        <div className="health-check-style">
            <div className="health-check-text-style">
                <h1>We Analyse Your Health States In Order To Top Service</h1>
                <p>Our Technology Health Check process helps you define the vision and provides an actionable road map to leverage technology to your competitive advantage in the market. This documented technology plan helps create insights on what is possible, identifies improvement opportunities and provides recommendations to help you achieve your business goals.</p>
            </div>
            <div className="health-check-img-style">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default HealthCheck;