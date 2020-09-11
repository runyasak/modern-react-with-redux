import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItemHtmls = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));
  return <div className="ui relaxed divided list">{videoItemHtmls}</div>;
};

export default VideoList;
