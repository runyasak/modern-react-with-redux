import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="text">
              Image Search
              <input id="text" type="text" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
