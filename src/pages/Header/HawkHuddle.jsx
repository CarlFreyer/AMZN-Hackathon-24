import React from 'react';
import Header from './header';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

const HawkHuddle = () => {
  return (
    <div className="hawk-huddle-container">
      <Header />
      <main className="main-content">
        <div className="content-wrapper">
          <SearchBar />
          <Navigation />
          <UserProfile />
        </div>
      </main>
      <style jsx>{`
        .hawk-huddle-container {
          display: flex;
          flex-direction: row;
          background-color: #fff;
          align-items: center;
          /* Add rounded corners */
          border-radius: 15px;
          /* Optional: Add a box shadow for better aesthetics */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          /* Optional: Add padding or margin as needed */
          padding: 20px;
          margin: 20px;
        }
        .main-content {
          display: flex;
          width: 100%;
          flex-direction: row;
          overflow: hidden;
          padding: 0 15px;
        }
        .content-wrapper {
          background-color: #fff;
          z-index: 10;
          display: flex;
          gap: 28px;
          padding: 6px 34px;
          /* Add rounded corners */
          border-radius: 7px;
        }
        @media (max-width: 991px) {
          .main-content {
            max-width: 100%;
          }
          .content-wrapper {
            padding: 0 20px;
            border-radius: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default HawkHuddle;
