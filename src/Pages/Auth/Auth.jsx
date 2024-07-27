import React, { useState } from 'react';
import { handleLogin } from './auth';
import "./auth.css";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [login, setLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginButton = () => {
    const user = {
      email,
      password
    }
    const loggedIn = handleLogin(user);
    console.log(loggedIn);
    if (loggedIn) {
      navigate("/")
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }

  const renderAuth = () => {
    switch(login) {
      case true:
        return (
          <div className="auth-box fade-in">
            <h1>Login with your account</h1>
            <input type="text" placeholder='Username or Email' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLoginButton}>Login</button>

            <div className="auth-links">
              <button>Forgot Password?</button>
              <button onClick={() => setLogin(false)}>Sign Up</button>
            </div>
          </div>
        )
      case false:
        return (
          <div className="auth-box fade-in">
            <h1>Sign up your account</h1>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Re-enter Password' />
            <button>Signup</button>

            <div className="auth-links">
              <button>Forgot Password?</button>
              <button onClick={() => setLogin(true)}>Login</button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className='auth-page'>
      {renderAuth()}
    </div>
  );
}

export default Auth;
