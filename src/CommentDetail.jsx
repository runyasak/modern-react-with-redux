import React from 'react';

export default ({
  name, avatar, timeAgo, text,
}) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img src={avatar} alt="avatar" />
    </a>
    <div className="content">
      <a href="/" className="author">
        {name}
      </a>
      <div className="metadata">
        <span className="timeAgo">{timeAgo}</span>
      </div>
      <div className="text">{text}</div>
    </div>
  </div>
);
