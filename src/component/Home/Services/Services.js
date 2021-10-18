import React, { useEffect, useState } from 'react';
import './Services.css';
import SingleService from './SingleService/SingleService';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/naime-ahmed/meadicare/gh-pages/temporsry.json';

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    
    return (
        <div className="services-style">
            <div className="services-header">
                <h1>Our best <span>Service</span></h1>
            </div>
            <div className="service-parent">
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;