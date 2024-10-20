import React from 'react';
import SelectField from './SelectField';
import SliderField from './SliderField';

const Sidebar = () => {
  const selectFields = [
    { label: 'COURSES', id: 'courses' },
    { label: 'BUILDING', id: 'building' },
    { label: 'ROOM', id: 'room' }
  ];

  return (
    <aside className="sidebar">
      {selectFields.map((field) => (
        <SelectField key={field.id} label={field.label} id={field.id} />
      ))}
      <SliderField />
      <button className="filter-button">Filter</button>
      <div className="sidebar-footer"></div>
      <style jsx>{`
        .sidebar {
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: rgba(161, 211, 68, 0.7);
          display: flex;
          width: 25%;
          padding-top: 18px;
          flex-direction: column;
        }
        .filter-button {
          border-radius: 8px;
          background-color: rgba(113, 75, 62, 0.46);
          color: #49454f;
          font: 500 14px/20px Roboto, sans-serif;
          letter-spacing: 0.1px;
          text-align: center;
          padding: 6px 16px;
          margin: 20px auto;
          border: 1px solid #000;
          cursor: pointer;
        }
        .sidebar-footer {
          background-color: rgba(113, 75, 62, 0);
          margin-top: 167px;
          height: 383px;
        }
        @media (max-width: 991px) {
          .sidebar {
            width: 100%;
            margin-top: 40px;
          }
          .sidebar-footer {
            margin-top: 40px;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;