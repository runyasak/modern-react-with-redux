import React from 'react';
import SearchBar from './SearchBar';
import { searchImages } from '../providers/unsplash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (searchResult) => {
    const response = await searchImages(searchResult);
    this.setState({ images: this.mapResults(response) });
  }

  mapResults(data) {
    return data.results;
  }

  render() {
    return (
      <div className="ui container" style={{ padding: '16px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
