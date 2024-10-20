import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">HawkHuddle</h1>
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          background-color: #fff;
          flex-direction: row;
        }
        .logo {
          color: #714b3e;
          flex-grow: 1;
          margin: auto 0;
          font: 700 24px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }
      `}</style>
    </header>
  );
};

export default Header;