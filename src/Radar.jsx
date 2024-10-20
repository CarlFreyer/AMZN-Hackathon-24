import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import BuildingList from './BuildingList';
import BuildingSelector from './BuildingSelector';
import Map from './Map';
//<BuildingList />
//<BuildingSelector />
const Radar = () => {
  return (
    <div className="heat-map">
      <div className="content-wrapper">
        <Map />
      </div>
      <style jsx>{`
        .heat-map {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0 1px;
        }
        .content-wrapper {
          display: flex;
          gap: 20px;
          overflow: hidden;
        }
        .main-content {
          display: flex;
          flex-direction: column;
          width: 75%;
        }
        .decorative-image {
          width: 74px;
          align-self: flex-start;
        }
        .building-section {
          display: flex;
          gap: 20px;
          margin-right: 57px;
          width: 100%;
          max-width: 1101px;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 991px) {
          .heat-map {
            max-width: 100%;
          }
          .content-wrapper {
            flex-direction: column;
          }
          .main-content {
            width: 100%;
          }
          .decorative-image {
            margin-top: 40px;
          }
          .building-section {
            flex-direction: column;
            margin-right: 10px;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Radar;