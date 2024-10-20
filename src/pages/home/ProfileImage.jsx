import React from 'react';

function ProfileImage() {
  return (
    <div className="profile-image-container">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac3727283fd74308bac03248574164a33521c0521aaf4991a9d55b92e7085ad?placeholderIfAbsent=true&apiKey=d26368f4bed741c4b42fb5729772598e" alt="Profile" className="profile-image" />
      <style jsx>{`
        .profile-image-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .profile-image {
          aspect-ratio: 1.08;
          object-fit: contain;
          width: 100%;
          border-radius: 50%;
        }
        @media (max-width: 991px) {
          .profile-image {
            max-width: 100%;
            margin-top: 50px;
          }
        }
      `}</style>
    </div>
  );
}

export default ProfileImage;