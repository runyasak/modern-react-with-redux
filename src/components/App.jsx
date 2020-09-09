import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResult: '' };
  }

  onSearchSubmit = (searchResult) => {
    this.setState({ searchResult });
  }

  render() {
    return (
      <div className="ui container" style={{ padding: '16px' }}>
        Search result: {this.state.searchResult}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
