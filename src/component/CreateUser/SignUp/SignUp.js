import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import signUpLogo from '../../../images/logo-dark.png';
import UseAuth from '../../../Hooks/UseAuth';

const SignUp = () => {

    const { handleRegistration, setName, setEmail, setPassword , error } = UseAuth();
    
    const getUserName = (e) => {
        setName(e.target.value);
    }
    const getUserEmail = (e) => {
        setEmail(e.target.value);
    }
    const getUserPassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="signUp-style">
            <div className="signUpForm">
                <div>
                    <img src={signUpLogo} alt="" /><br />
                </div>
                <small>{ error? "something is wrong" : ""}</small>
                <div className="inputs-style">

                    <input onBlur={getUserName} type="text" className="input-style" placeholder="your name" name="" required /><br />
                    
                    <input onBlur={getUserEmail} type="email" className="input-style" placeholder="email" name="" required /><br />
                    
                    <input onBlur={getUserPassword} type="password" className="input-style" placeholder="password" name="" required /><br />
                   
                    <input onClick={handleRegistration}  type="submit" value="Submit" className="input-btn" /><br />
                    <Link to="/signIn">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;