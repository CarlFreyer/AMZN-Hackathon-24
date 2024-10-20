import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeatMap from '../heatmap/heatMap';

function LoginForm() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // navigate('/heatmap'); 
    <HeatMap />
  };
  return (
    <form className="login-form">
      <div className="input-group">
        <label htmlFor="username" className="input-label">Username</label>
        <input
          type="email"
          id="username"
          className="input-field"
          placeholder="johndoe@lehigh.edu"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password" className="input-label">Password</label>
        <div className="password-input">
          <input
            type="password"
            id="password"
            className="input-field"
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5f70aa7b0a46d3fa30eb7b7748085d23757447711ff087e0a5cbf1fe07ff6e?placeholderIfAbsent=true&apiKey=d26368f4bed741c4b42fb5729772598e" alt="Toggle password visibility" className="password-toggle" />
        </div>
      </div>
      <div className="form-options">
        <label className="remember-me">
          <input type="checkbox" className="visually-hidden" />
          <span className="custom-checkbox"></span>
          Remember me
        </label>
        <a href="#forgot-password" className="forgot-password">Forget password?</a>
      </div>
      <form onSubmit={handleSignIn}><button type="submit" className="sign-in-button">Sign In</button> </form>      
    <style jsx>{`
        .login-form {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 640px;
        }
        .input-group {
          margin-bottom: 36px;
        }
        .input-label {
          display: block;
          color: #444b59;
          font: 600 28px Montserrat, sans-serif;
          letter-spacing: 2.8px;
          margin-bottom: 16px;
        }
        .input-field {
          width: 100%;
          border-radius: 80px;
          border: 2px solid #714b3e;
          padding: 24px 32px;
          font-size: 24px;
          letter-spacing: 2.4px;
        }
        .password-input {
          position: relative;
        }
        .password-toggle {
          position: absolute;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          cursor: pointer;
        }
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 61px;
        }
        .remember-me {
          display: flex;
          align-items: center;
          font: 400 20px Montserrat, sans-serif;
          letter-spacing: 2px;
          color: #444b59;
        }
        .custom-checkbox {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #a1d344;
          display: inline-block;
          margin-right: 16px;
          position: relative;
        }
        .custom-checkbox::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #a1d344;
          display: none;
        }
        input[type="checkbox"]:checked + .custom-checkbox::after {
          display: block;
        }
        .forgot-password {
          color: #714b3e;
          font: 600 20px Montserrat, sans-serif;
          letter-spacing: 2px;
          text-decoration: none;
        }
        .sign-in-button {
          border-radius: 80px;
          background-color: #a1d344;
          box-shadow: 4px 8px 12px rgba(78, 99, 141, 0.06);
          color: #fff;
          letter-spacing: 2.8px;
          padding: 23px 32px;
          font: 800 28px Montserrat, sans-serif;
          border: 2px solid #714b3e;
          cursor: pointer;
          width: 100%;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 991px) {
          .input-field, .sign-in-button {
            padding: 20px;
          }
          .form-options {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }
      `}</style>
    </form>
  );
}

export default LoginForm;