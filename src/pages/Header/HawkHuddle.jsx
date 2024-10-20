import React from 'react';
import Header from './header';
import SearchBar from './SearchBar';

const HawkHuddle = () => {
  return (
    <div className="hawk-huddle-container">
      <Header />
      <main className="main-content">
        <div className="content-wrapper">
          <SearchBar />
        </div>
      </main>
      <style jsx>{`
        .hawk-huddle-container {
          display: flex;
          flex-direction: column;
        }
        .main-content {
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
          padding: 0 1px;
        }
        .content-wrapper {
          background-color: #fff;
          z-index: 10;
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
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