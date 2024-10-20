import React from 'react';

const SearchBar = () => {
  return (
    <form className="search-form" role="search">
      <label htmlFor="search-input" className="visually-hidden">Search</label>
      <input
        type="search"
        id="search-input"
        className="search-input"
        placeholder="Search"
        aria-label="Search"
      />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/33eb9eaf05860fe5b56f79892ddd612599bc3ad6fb91b38667d6a2b69c724172?placeholderIfAbsent=true&apiKey=d26368f4bed741c4b42fb5729772598e" alt="" className="search-icon" />
      <button type="submit" className="search-submit">Enter</button>
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
          font: 400 13px/24px Lexend Deca, -apple-system, Roboto, Helvetica, sans-serif;
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
        .search-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        .search-submit {
          opacity: 0.3;
          border-left: 1px solid #d2d5da;
          padding: 0 16px;
          background: transparent;
          color: inherit;
          font: inherit;
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
          border-width: 0;
        }
        @media (max-width: 991px) {
          .search-form {
            max-width: 100%;
          }
        }
      `}</style>
    </form>
  );
};

export default SearchBar;