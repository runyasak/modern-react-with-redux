/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({
  label, options, selected, onSelectedChange,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

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

  const visibleActiveClasses = open ? 'visible active' : '';
  const visibleTransitionClasses = open ? 'visible transition' : '';

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="dropdown" className="label">
          {label}
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${visibleActiveClasses}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${visibleTransitionClasses}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
