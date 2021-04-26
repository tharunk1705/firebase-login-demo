import React, {useState, useEffect} from "react";
import fire from "./fire";
import Login from "./Login";
import Home from "./Home";

const App = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInput = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/Invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password" :
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                    case "auth/Invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password" :
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                clearInput();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, [])


    return(
        <div className="container mt-4">
            <h1 className="text-center mt-4">Resourcefy</h1>
            <div className="container-fluid p-5">
                { user ?
                    (
                        <Home handleLogout = {handleLogout} />
                    ) : (
                        <Login 
                            email = {email}
                            setEmail= {setEmail}
                            password = {password}
                            setPassword = {setPassword}
                            hasAccount = {hasAccount}
                            setHasAccount = {setHasAccount}
                            handleLogin = {handleLogin}
                            handleSignup = {handleSignup}
                            emailError = {emailError}
                            passwordError = {passwordError}
                        />                
                    )
                }         
            </div>
        </div>
    );
}

export default App;