import React from 'react';

const VideoItem = ({ video: { snippet: { title, thumbnails } } }) => (
  <div>
    <img src={thumbnails.medium.url} alt={title} />
    {title}
  </div>
);

export default VideoItem;
