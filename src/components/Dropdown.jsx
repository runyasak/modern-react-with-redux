/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options
    .filter((option) => option.value !== selected.value)
    .map((option) => (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
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
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
