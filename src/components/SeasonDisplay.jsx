import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun icon',
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake icon',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }

  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
