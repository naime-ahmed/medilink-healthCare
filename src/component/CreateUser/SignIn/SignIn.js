import React from 'react';
import './SignIn.css';
import logo from '../../../images/logo-dark.png'
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const SignIn = () => {

    const { handleGoogleLogin, handleGithubLogin, handleSignIn, setEmail, setPassword, error } = UseAuth();
    
    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="signIn-page-style">
            <div className="signIn-form-style">
                <div className="signIn-logo">
                    <img src={logo} alt="" />
                </div>
                <small>{ error? "something is wrong" : ""}</small>
                <div className="inputs-field-style">

                    <input onBlur={getEmail} className="input-style" type="email" required placeholder="Your Email" /><br />

                    <input onBlur={getPassword} className="input-style" type="password" required placeholder="Password" /> <br />
                    
                    <input onClick={handleSignIn} className="submit-btn" type="button" value="Submit" />

                </div>

                <div className="firebase-signIn">
                    <h3>--------- OR ----------</h3>

                    <button onClick={handleGoogleLogin}><i className="fab fa-google" title="Google"></i></button>

                    <button onClick={handleGithubLogin}><i className="fab fa-github" title="Github"></i></button>

                    <Link to="/signUp">New User?</Link>
                </div>

            </div>
        </div>
    );
};

export default SignIn;