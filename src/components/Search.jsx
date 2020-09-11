import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">
            Enter Search Term
            <input
              id="search"
              className="input"
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
