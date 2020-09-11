import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoIframe = (videoValue) => {
    const videoSrc = `https://www.youtube.com/embed/${videoValue.id.videoId}`;

    return <iframe src={videoSrc} title={videoValue.snippet.title} />;
  };

  return (
    <div>
      <div className="ui embed">
        {videoIframe(video)}
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          {video.snippet.title}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
