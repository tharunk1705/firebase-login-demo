import React from "react";

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        hasAccount,
        setHasAccount,
        handleLogin,
        handleSignup,
        emailError,
        passwordError
    } = props;


    return(
        <section>
            <div className="glassmorphic-container">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">User Email</label>
                        <input 
                            className="form-control"
                            type="text" 
                            id="email" 
                            autoFocus 
                            required 
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                        <p className="p-2" style={{color : "red"}}>{emailError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            className="form-control"
                            type="password" 
                            id="password"  
                            required 
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                        <p  className="p-2" style={{color : "red"}}>{passwordError}</p>
                    </div>      
                    <div>
                        {hasAccount ? (
                            <>
                                <button className="btn btn-primary mx-auto btn-block" onClick={handleLogin}>Sign in</button>
                                <p className="mt-4 text-center" style={{color : "#fff"}}>Don't have an account? 
                                    <span onClick={() => setHasAccount(!hasAccount)} style={{fontWeight : "bolder", color : "#f7ea00"}}> Sign up</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-primary mx-auto btn-block" onClick={handleSignup}>Sign up</button>
                                <p className="mt-4 text-center" style={{color : "#fff"}}>Already have an account? 
                                    <span onClick={() => setHasAccount(!hasAccount)} style={{fontWeight : "bolder", color : "#f7ea00"}}> Sign in</span>
                                </p>
                            </>  
                        )}
                    </div>         
            </div>
        </section>
    );
};

export default Login;