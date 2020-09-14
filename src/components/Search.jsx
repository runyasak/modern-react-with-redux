/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { searchWiki } from '../providers/wikipedia';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const searchResults = await searchWiki(debouncedTerm);

      if (!searchResults.query || !searchResults.query.search) {
        setResults([]);
      } else {
        setResults(searchResults.query.search);
      }
    };

    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          rel="noreferrer"
          target="_blank"
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">
          {result.title}
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
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
