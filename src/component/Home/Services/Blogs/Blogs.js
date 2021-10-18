import React from 'react';
import './Blogs.css';
import img1 from '../../../../images/milia.jpg';
import img2 from '../../../../images/liposuction.jpg'
import img3 from '../../../../images/neurology.jpg';

const Blogs = () => {
    return (
        <div className="blog-section-style">
            <div className="blog-header">
                <h1>Recent Blogs</h1>
            </div>
            <div className="blogs-style">
                <div className="single-blog-style">
                    <div className="blog-img-style"> 
                        <img src={img1} alt="" />
                </div>
                    <div className="blog-text-style">
                        <h3>Do you have tiny white bumps around your eyes? Find out what ‘milia’ are</h3>
                        <p>Have you ever seen small white bumps on your face, particularly on your upper cheeks or around your eyes? Chances are it’s milia (plural: milia, single: milium). They’re painless small white cysts that don’t feel itchy or irritated unless they are picked or aggravated.</p>
                        <small>see more <i className="fas fa-arrow-right"></i></small>
                    </div>
                </div>
                <div className="single-blog-style">
                    <div className="blog-img-style">
                        <img src={img3} alt="" />
                    </div>
                    <div className="blog-text-style">
                        <h3>Seeking Submissions to the Global and Community Health Subsection: A Call for </h3>
                        <p>Bayanihan is a Filipino custom in which a community comes together in unity, shared work, and cooperation to achieve a task. Historically, bayanihan was a tradition in which a community would come together and help a family literally move their house.</p>
                        <small>see more <i className="fas fa-arrow-right"></i></small>
                    </div>
                </div>
                <div className="single-blog-style">
                    <div className="blog-img-style">
                        <img src={img2} alt="" />
                </div>
                    <div className="blog-text-style">
                        <h3>	
                            Could liposuction become more popular than breast augmentation?
                        </h3>
                        <p>Some surgeons and organizations are predicting that liposuction will surpass breast augmentation in 2021. But what exactly are the pros and cons of liposuction and why do they believe that liposuction trends are changing?</p>
                        <small>see more <i className="fas fa-arrow-right"></i></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;