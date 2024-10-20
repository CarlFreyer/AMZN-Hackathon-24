import React from 'react';
import Header from '../Header/HawkHuddle';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import ProfileImage from './ProfileImage';

function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <main className="login-content">
        <div className="login-column">
          <h1 className="welcome-text">WELCOME BACK!</h1>
          <p className="signup-prompt">
            Don't have a <span className="highlight">account</span>, <strong className="highlight">Sign up</strong>
          </p>
          <LoginForm />
          <p className="continue-text">or continue with</p>
          <SocialLogin />
        </div>
        <div className="profile-column">
          <ProfileImage />
        </div>
      </main>
      <style jsx>{`
        .login-page {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 58px 33px;
        }
        .login-content {
          display: flex;
          width: 100%;
          max-width: 1444px;
          margin-top: 59px;
          gap: 20px;
        }
        .login-column {
          display: flex;
          flex-direction: column;
          width: 50%;
        }
        .welcome-text {
          color: #714b3e;
          letter-spacing: 3.6px;
          font: 800 36px Montserrat, sans-serif;
          border: 1px solid #714b3e;
          align-self: flex-start;
        }
        .signup-prompt {
          color: #444b59;
          letter-spacing: 2.4px;
          margin-top: 29px;
          font: 400 24px 'Open Sans', sans-serif;
          border: 1px solid #714b3e;
        }
        .highlight {
          color: #714b3e;
        }
        .continue-text {
          border: 1px solid #714b3e;
          background-color: #fff;
          align-self: center;
          margin-top: 37px;
          padding: 8px;
          color: #444b59;
          letter-spacing: 2px;
          font: 400 20px Montserrat, sans-serif;
        }
        .profile-column {
          width: 50%;
        }
        @media (max-width: 991px) {
          .login-page {
            padding: 0 20px;
          }
          .login-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            margin-top: 40px;
          }
          .login-column, .profile-column {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default LoginPage;