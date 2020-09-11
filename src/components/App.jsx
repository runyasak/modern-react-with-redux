import React, { Component } from 'react';
import { searchVideos } from '../providers/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

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
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
