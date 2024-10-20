import React from 'react';

const SelectField = ({ label, id }) => {
  return (
    <div className="select-field">
      <label htmlFor={id} className="label">{label}</label>
      <select id={id} className="select">
        <option value="">Select...</option>
      </select>
      <style jsx>{`
        .select-field {
          display: flex;
          flex-direction: column;
          margin: 0 26px 20px 27px;
          font: 400 14px/1.4 Roboto, sans-serif;
        }
        .label {
          color: #1d250e;
          margin-bottom: 8px;
        }
        .select {
          border-radius: 8px;
          background-color: #fff;
          min-height: 40px;
          width: 100%;
          color: #4e5d32;
          padding: 12px 16px;
          border: 1px solid #d9d9d9;
          appearance: none;
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
          background-repeat: no-repeat;
          background-position: right 12px top 50%;
          background-size: 16px auto;
        }
        @media (max-width: 991px) {
          .select-field {
            margin: 0 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SelectField;