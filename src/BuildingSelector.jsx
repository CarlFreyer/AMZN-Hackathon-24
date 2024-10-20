import React from 'react';

const BuildingSelector = () => {
  return (
    <div className="building-selector">
      <p className="selector-text">SELECT A BUILDING...</p>
      <style jsx>{`
        .building-selector {
          border-radius: 20px;
          background-color: rgba(241, 232, 230, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          width: 40%;
          height: 360px;
          padding: 0px;
          margin-right: 5%;
          margin-left: 5%;
          font: 700 20px Montserrat, sans-serif;
        }
        .selector-text {
          text-align: center;
        }
        @media (max-width: 991px) {
          .building-selector {
            max-width: 100%;
            margin-top: 40px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default BuildingSelector;