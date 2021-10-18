import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {

    const [detailsInfo, setDetailsInfo] = useState({});

    const {serviceId } = useParams();

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/naime-ahmed/meadicare/gh-pages/temporsry.json';

        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsInfo(data.find(service => service.id === serviceId)));
    },[])
    return (
        <div className="service-details-style" >
            <div className="img-text-style">
                <div className="details-text-style">
                    <h1>{detailsInfo?.name}</h1>
                    <p>{ detailsInfo?.description}</p>
                </div>
                <div className="details-img-style">
                    <img src={detailsInfo.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;