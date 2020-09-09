/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Hi there!' };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="text">
              Image Search
              <input
                id="text"
                type="text"
                value={term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
