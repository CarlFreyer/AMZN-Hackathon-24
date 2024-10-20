import React from 'react';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6787be09d8877303ac2dc87372408c79c4e6960298d3660774c1efafae63683d?placeholderIfAbsent=true&apiKey=d26368f4bed741c4b42fb5729772598e" alt="User avatar" className="user-avatar" />
      <div className="user-info">
        <span className="user-name">John Doe</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c47617f64bb145cb0db6090ed3e2c3dc308c125894eac84094816c0f504828?placeholderIfAbsent=true&apiKey=d26368f4bed741c4b42fb5729772598e" alt="" className="dropdown-icon" />
      </div>
      <style jsx>{`
        .user-profile {
          display: flex;
          align-items: center;
          gap: 1px;
          color: #714b3e;
          text-align: center;
          font: 800 16px/1.5 Gilroy, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .user-avatar {
          width: 60px;
          height: 52px;
          object-fit: contain;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .user-name {
          margin: auto 0;
        }
        .dropdown-icon {
          width: 14px;
          height: 14px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default UserProfile;