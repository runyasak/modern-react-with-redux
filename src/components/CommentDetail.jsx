import React from 'react';

export default ({
  author, avatar, timeAgo, content,
}) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img src={avatar} alt="avatar" />
    </a>
    <div className="content">
      <a href="/" className="author">
        {author}
      </a>
      <div className="metadata">
        <span className="timeAgo">{timeAgo}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  </div>
);
