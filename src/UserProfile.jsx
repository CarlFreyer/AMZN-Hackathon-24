import React from 'react';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6787be09d8877303ac2dc87372408c79c4e6960298d3660774c1efafae63683d?placeholderIfAbsent=true&apiKey=f10bf8204ac344558f21f79909bd7a81" alt="User avatar" className="avatar" />
      <div className="user-info">
        <span className="user-name">Jon Doe</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c47617f64bb145cb0db6090ed3e2c3dc308c125894eac84094816c0f504828?placeholderIfAbsent=true&apiKey=f10bf8204ac344558f21f79909bd7a81" alt="" className="dropdown-icon" />
      </div>
      <style jsx>{`
        .user-profile {
          display: flex;
          gap: 1px;
          color: #714b3e;
          text-align: center;
          font: 800 16px/1.5 Gilroy, sans-serif;
        }
        .avatar {
          width: 60px;
          height: 52px;
          object-fit: contain;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: 22px;
          margin: auto 0;
        }
        .user-name {
          align-self: stretch;
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