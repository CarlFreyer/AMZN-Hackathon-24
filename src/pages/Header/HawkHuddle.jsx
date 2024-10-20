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
        }
        .main-content {
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: row;
          overflow: hidden;
          padding: 0 30px;
        }
        .content-wrapper {
          background-color: #fff;
          z-index: 10;
          display: flex;
          gap: 28px;
          padding: 6px 34px;
        }
        @media (max-width: 991px) {
          .main-content {
            max-width: 100%;
          }
          .content-wrapper {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default HawkHuddle;