import React from 'react';

const SearchBar = () => {
  return (
    <form className="search-form" role="search">
      <label htmlFor="search-input" className="visually-hidden">Search</label>
      <input
        id="search-input"
        type="search"
        placeholder="Search"
        className="search-input"
        aria-label="Search"
      />
      <button type="submit" className="search-button">Enter</button>
      <style jsx>{`
        .search-form {
          border-radius: 16px;
          background-color: rgba(227, 209, 187, 0.3);
          display: flex;
          min-width: 240px;
          align-items: center;
          gap: 10px;
          color: #714b3e;
          width: 320px;
          padding: 8px 12px;
          font: 400 13px/24px Lexend Deca, sans-serif;
          border: 1px solid #714b3e;
        }
        .search-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          outline: none;
          color: inherit;
          font: inherit;
        }
        .search-button {
          background: none;
          border: none;
          color: inherit;
          font: inherit;
          opacity: 0.3;
          cursor: pointer;
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
          .search-form {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
};

export default SearchBar;