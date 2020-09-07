import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }

  return lat > 0 ? 'winter' : 'summer';
};

const getDisplayText = (season) => (season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach');

export default ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  return (
    <div>
      Seasion Display
      {' '}
      {getDisplayText(season)}
    </div>
  );
};
