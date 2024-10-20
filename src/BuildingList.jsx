import React from 'react';

const BuildingList = () => {
  const buildings = [
    'Fairchild Martindale Library',
    'Maginnes Hall',
    'Neville Hall',
    'Sinclair Laboratory',
    'Whitaker Laboratory'
  ];

  return (
    <div className="building-list">
      <h2 className="buildings-title">BUILDINGS</h2>
      <ul className="buildings-list">
        {buildings.map((building, index) => (
          <li key={index} className="building-item">
            {building}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .building-list {
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 383px;
          width: 50%;
          color: #000;
          padding: 26px 0 51px;
          font: 400 16px Montserrat, sans-serif;
          background-image: url('https://cdn.builder.io/api/v1/image/assets/TEMP/62508f9cbdee5cf1cf47d13fd907f8b1b825a4fb85afcfcb4c77e68c93b7aebc?placeholderIfAbsent=true&apiKey=f10bf8204ac344558f21f79909bd7a81');
          background-size: cover;
          background-position: center;
        }
        .buildings-title {
          font-size: 20px;
          font-weight: 700;
          margin-left: 20px;
          margin-bottom: 12px;
        }
        .buildings-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .building-item {
          background-color: rgba(241, 232, 230, 1);
          line-height: 32px;
          padding: 11px 20px;
          margin-bottom: 1px;
        }
        @media (max-width: 991px) {
          .building-list {
            max-width: 100%;
            margin-top: 40px;
          }
          .buildings-title {
            margin-left: 10px;
          }
          .building-item {
            padding: 11px 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default BuildingList;