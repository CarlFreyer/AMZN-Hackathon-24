import React from 'react';

const Navigation = () => {
  const menuItems = [
    { label: 'Home', active: true },
    { label: 'Radar', active: false },
    { label: 'Nest Chat', active: false },
  ];

  return (
    <nav className="navigation">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
            <a href={`#${item.label.toLowerCase()}`}>{item.label}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navigation {
          display: flex;
          align-items: center;
        }
        .menu-list {
          display: flex;
          min-width: 240px;
          align-items: center;
          gap: 2px;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .menu-item {
          border-radius: 10px;
          padding: 2px 12px;
        }
        .menu-item a {
          color: #535a65;
          text-decoration: none;
          font: 500 25px/0.8 Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .menu-item.active a {
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .menu-list {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;