import React from 'react';
import './About.css';
import aboutImg from '../../images/AboutUs.jpg';

const About = () => {
    return (
        <div className="about-page-style">
            <div className="about-img-text-style">
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about-text">
                    <h1>Knowing Us</h1>
                    <p>We are a team united in our commitment and driven by an altruistic approach to improve life through outstanding healthcare.</p>
                    <button className="about-btn">Contact us</button>
                </div>
            </div>
            <div className="middle-header-style">
                <h1>Welcome to <span>Medilink</span> Healthcare</h1>
                </div>
            <div className="about-details-style">
                <div>
                    <p>A state-of-the-art, super-specialty hospital in the heart of Chennai city in India, MGM Healthcare redefines the patient experience across all parameters — through expertise, technology and a green building facility. This quaternary care hospital has 400 beds, 100 ICU beds, 250+ doctors, 12 Centres of Excellence, 30+ departments, 12 operation theatres and 24×7 emergency care.Patients are at the core of everything MGM Healthcare aspires to do and we intend to revolutionise patient experience by taking medical services back to principles of kindness and goodwill, paired with excellence and intelligence. The combined expertise of an experienced team of surgeons, physicians, technicians, nurses, paramedical, administrative and maintenance staff ensures highly personalised care of the finest quality
                    </p>
                </div>
                <div>
                    <p>The hospital operates on a comprehensive, fully-integrated system with components such as HIS-integrated Electronic Medical Record, Doctor and Patient Portal apps, Porter Management solution, In-room Automation, Voice-enabled Nurse Call System, Self-service Kiosks and Building Management System. Every aspect of our campus reflects an ethos of healing, from the city’s tallest vertical garden to the use of music therapy in critical care areas to thematic art galleries on each floor celebrating various facets of Tamil Nadu.The ground-plus-11-floor facility is also optimally designed to provide a comforting ambience, which holistically incorporates energy-efficient practices to further widen the scope of the health-caring concept to include environmental sustainability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;