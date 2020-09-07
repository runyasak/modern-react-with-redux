import React from 'react';

const Spinner = ({ message }) => (
  <div className="ui active dimmer">
    <div className="ui big text loader">
      { message }
    </div>
  </div>
);

export default Spinner;
