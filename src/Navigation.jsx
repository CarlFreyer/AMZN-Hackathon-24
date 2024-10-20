import React from 'react';

const Navigation = () => {
  const menuItems = ['/', 'Radar', 'Nest Chat'];

  return (
    <nav className="navigation">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${index === 1 ? 'active' : ''}`}>
            <a href={`${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navigation {
        }
        .menu-list {
          display: flex;
          min-width: 240px;
          align-items: start;
          gap: 2px;
          color: #535a65;
          list-style-type: none;
          padding: 0;
          margin: 0;
          font: 500 25px/0.8 Montserrat, sans-serif;
        }
        .menu-item {
          border-radius: 10px;
          padding: 2px 12px;
        }
        .menu-item a {
          text-decoration: none;
          color: inherit;
        }
        .menu-item.active {
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .menu-list {
            max-width: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;