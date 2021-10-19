import React from 'react';
import './SignIn.css';
import logo from '../../../images/logo-dark.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const SignIn = () => {

    const { handleGoogleLogin, handleGithubLogin, handleSignIn, setEmail, setPassword, error, setError, setIsLoading } = UseAuth();

    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    
    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const signInUsingGoogle = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }

    const signInUsingGithub = () => {
        handleGithubLogin()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }

    const signInUsingEmailPass = () => {
        handleSignIn()
            .then(result => {
                setError("")
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
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
                    
                    <input onClick={signInUsingEmailPass} className="submit-btn" type="button" value="Submit" />

                </div>

                <div className="firebase-signIn">
                    <h3>--------- OR ----------</h3>

                    <button onClick={signInUsingGoogle}><i className="fab fa-google" title="Google"></i></button>

                    <button onClick={signInUsingGithub}><i className="fab fa-github" title="Github"></i></button>

                    <Link to="/signUp">New User?</Link>
                </div>

            </div>
        </div>
    );
};

export default SignIn;