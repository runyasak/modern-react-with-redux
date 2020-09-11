import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const videoItemHtmls = videos.map((video) => <VideoItem key={video.id.videoId} video={video} />);
  return <div>{videoItemHtmls}</div>;
};

export default VideoList;
