import React from 'react';
import './Doctors.css';
import image1 from '../../images/doctor1.jpg';
import image2 from '../../images/doctor2.jpg';
import image3 from '../../images/doctor3.jpg';
import image4 from '../../images/doctor.jpg';

const Doctors = () => {
    return (
        <div className="doctors-page-style">
            
            <div className="single-doctor-style">
                <div className="doctor-img-style">
                    <img src={image1} alt="" />
                </div>
                <div className="doctor-text-style">
                    <h2>Name: Kavin Powel</h2>
                    <p>See more</p>
                </div>
            </div>
            <div className="single-doctor-style">
                <div className="doctor-img-style">
                    <img src={image2} alt="" />
                </div>
                <div className="doctor-text-style">
                    <h2>Name: David gen</h2>
                    <p>See more</p>
                </div>
            </div>
            <div className="single-doctor-style">
                <div className="doctor-img-style">
                    <img src={image3} alt="" />
                </div>
                <div className="doctor-text-style">
                    <h2>Name: Juli Agen</h2>
                    <p>See more</p>
                </div>
            </div>
            <div className="single-doctor-style">
                <div className="doctor-img-style">
                    <img src={image4} alt="" />
                </div>
                <div className="doctor-text-style">
                    <h2>Name: Nataliya daren </h2>
                    <p>See more</p>
                </div>
            </div>

        </div>
    );
};

export default Doctors;