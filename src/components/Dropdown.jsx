/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => (
    <div key={option.value} className="item">
      {option.label}
    </div>
  ));

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="dropdown" className="label">
          Select a Color
        </label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon" />
          <div className="text">Select Color</div>
          <div className="menu visible transition">
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
