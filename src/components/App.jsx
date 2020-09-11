import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { searchVideos } from '../providers/youtube';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }

  onTermSubmit = async (term) => {
    const { items: videos } = await searchVideos({ q: term });
    this.setState({ videos });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
