import React from 'react';

function SocialLogin() {
  return (
    <div className="social-login">
      <button className="social-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/66d042d414656fa9a625313c147d9ea25472e2a83a2f7045e889dd9c7dc05dd9?placeholderIfAbsent=true&apiKey=d26368f4bed741c4b42fb5729772598e" alt="Social login" className="social-icon" />
      </button>
      <style jsx>{`
        .social-login {
          display: flex;
          justify-content: center;
          margin-top: 18px;
        }
        .social-button {
          border-radius: 8px;
          border: 2px solid #714b3e;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 80px;
          padding: 15px;
          cursor: pointer;
        }
        .social-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        @media (max-width: 991px) {
          .social-button {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default SocialLogin;