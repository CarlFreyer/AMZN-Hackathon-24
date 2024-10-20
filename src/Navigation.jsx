import React from 'react';

const Navigation = () => {
  const menuItems = [{name:'Home', location: '/'}, {name:'Radar', location: 'radar'}, {name:'Nest Chat', location: 'chat'}];

  return (
    <nav className="navigation">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item`}>
            <a href={`${item.location}`}>{item.name}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navigation {
        z-index: 100;
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
        .menu-item:hover{
          font-weight: bolder;
        }
        .menu-item a {
          text-decoration: none;
          color: inherit;
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