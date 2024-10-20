import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Radar', path: '/heatmap' },
    { label: 'Nest Chat', path: '/chatroom' },
  ];

  const handleNavigation = (path) => {
    navigate(path); 
  };

  return (
    <nav className="navigation">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="menu-item"
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
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
          cursor: pointer;
          font: 500 25px/0.8 Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
          color: #535a65;
        }
        .menu-item:hover {
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
