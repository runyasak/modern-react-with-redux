import React from 'react';
import { searchImages } from '../providers/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
