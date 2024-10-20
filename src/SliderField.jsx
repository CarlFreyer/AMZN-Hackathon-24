import React, { useState } from 'react';

const SliderField = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-field">
      <div className="label-wrapper">
        <label htmlFor="group-size" className="label">
          GROUP SIZE
        </label>
        <output htmlFor="group-size" className="slider-output">
          {value}
        </output>
      </div>
      <input
        type="range"
        id="group-size"
        className="slider"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <style jsx>{`
        .slider-field {
          display: flex;
          flex-direction: column;
          margin: 20px 26px 0 27px;
        }
        .label-wrapper {
          display: flex;
          width: 100%;
          justify-content: space-between;
          font-family: Roboto, sans-serif;
          color: #000;
          margin-bottom: 12px;
        }
        .label {
          font-size: 14px;
          font-weight: 400;
        }
        .slider-output {
          font-size: 12px;
        }
        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: #e6e6e6;
          outline: none;
        }
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2c2c2c;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2c2c2c;
          cursor: pointer;
          border: none;
        }
        @media (max-width: 991px) {
          .slider-field {
            margin: 20px 10px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SliderField;