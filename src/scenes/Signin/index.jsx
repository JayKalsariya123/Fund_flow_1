// src/Signin.jsx
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import './Signin.css'; // Import the custom CSS for styling

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="signin-header">
          <a href="/" className="back-link">← Back to Simmpple</a>
        </div>
        <h1>Sign In</h1>
        <p>Enter your email and password to sign in!</p>
        <button className="google-signin">
          <FcGoogle size={24} style={{ marginRight: '10px' }} />
          Sign in with Google
        </button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form className="signin-form">
          <label>Email*</label>
          <input type="email" placeholder="mail@simmpple.com" required />
          <label>Password*</label>
          <input type="password" placeholder="Min. 8 characters" required />
          <div className="signin-options">
            <label>
              <input type="checkbox" />
              Keep me logged in
            </label>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          <button className="signin-button">Sign In</button>
        </form>
        <p className="register-text">
          Not registered yet? <a href="/signup">Create an Account</a>
        </p>
      </div>
      <div className="signin-right">
        <div className="branding">
          <img src="/logo.png" alt="Horizon UI" className="logo" />
          <h2>Horizon UI</h2>
          <p>Learn more about Horizon UI on</p>
          <a href="https://horizon-ui.com" className="branding-link">horizon-ui.com</a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
