import React from 'react';
import './NotExist.css';
import errorImg from '../../images/404image.jpg';

const NotExist = () => {
    return (
        <div className="error-message">
            <img src={errorImg} alt="" />
        </div>
    );
};

export default NotExist;