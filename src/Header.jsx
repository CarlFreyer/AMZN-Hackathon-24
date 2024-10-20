import React from 'react';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">HawkHuddle</h1>
      <div className="header-content">
        <SearchBar />
        <Navigation />
        <UserProfile />
      </div>
      <style jsx>{`
        .header {
          background-color: #fff;
          z-index: 10;
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          padding: 6px 34px;
          height: 70px;
        }
        .logo {
          color: #714b3e;
          flex-grow: 1;
          margin: auto 0;
          font: 700 24px Montserrat, sans-serif;
        }
        .header-content {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          flex-grow: 1;
          flex-basis: auto;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 991px) {
          .header {
            padding: 0 20px;
          }
          .header-content {
            max-width: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;