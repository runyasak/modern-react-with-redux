import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const videoItemHtmls = videos.map((video) => <VideoItem key={video.id.videoId} video={video} />);
  return <div className="ui relaxed divided list">{videoItemHtmls}</div>;
};

export default VideoList;
