import React, { Component } from 'react';
import { searchVideos } from '../providers/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: undefined };
  }

  onTermSubmit = async (term) => {
    const { items: videos } = await searchVideos({ q: term });
    this.setState({ videos });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
