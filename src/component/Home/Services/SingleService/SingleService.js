import React from 'react';
import { useHistory } from 'react-router';
import './SingleService.css';

const SingleService = (props) => {

    const { id, name, img, description } = props.service;

    const history = useHistory();

    const showDetails = () => {
        history.push(`/home/${id}`)
    }

    return (
        <div className="single-service-style">
            <div className="service-img">
                <img src={img} alt="" />
            </div>
            <div className="single-service-text">
                <h3>{name}</h3>
                <p>{description.slice(0, 150)}</p>
                <button onClick={showDetails} className="service-btn">See more</button>
            </div>
        </div>
    );
};

export default SingleService;