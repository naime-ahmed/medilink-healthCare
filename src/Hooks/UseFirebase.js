import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../FirebaseSetup/Firebase.init';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword , signOut , updateProfile, sendEmailVerification, getAuth} from "firebase/auth";
import { useHistory } from 'react-router';

initializeAuthentication();

const UseFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const history = useHistory();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleGithubLogin = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleRegistration = () => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                setError("")
                alert("registration successful")
                history.push('/home')
            })
            
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleSignIn = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError("");
                alert("Sign In successful")
                
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                alert("You will be Sign Out");
                
                
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);


    return {
        handleGoogleLogin,
        handleGithubLogin,
        handleRegistration,
        handleSignIn,
        handleSignOut,
        isLoading,
        setName,
        setEmail,
        setPassword,
        user,
        error
    }
};

export default UseFirebase;