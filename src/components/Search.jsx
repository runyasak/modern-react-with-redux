import React, { useEffect, useState } from 'react';
import { searchWiki } from '../providers/wikipedia';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const searchResults = await searchWiki(term);

      setResults(searchResults.query.search);
    };

    search();
  }, [term]);

  const renderedResults = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="content">
        <div className="header">
          {result.title}
        </div>
        {result.snippet}
      </div>
    </div>
  ));

  return (
    <div className="search">
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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
