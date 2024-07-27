import React from 'react'
import "./auth.css"

const Auth = () => {
  return (
    <div className='auth-page'>
      <div className="auth-box fade-in">
        <h1>Login with your account</h1>
        <input type="text" placeholder='Username or Email' />
        <input type="password" placeholder='Password' />
        <button>Login</button>

        <div className="auth-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Auth