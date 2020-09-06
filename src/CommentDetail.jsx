import React from 'react';
import PropTypes from 'prop-types';

const CommentDetail = ({
  name, avatar, date, text,
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
        <span className="date">{date}</span>
      </div>
      <div className="text">{text}</div>
    </div>
  </div>
);

CommentDetail.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

CommentDetail.defaultProps = {
  name: '',
  avatar: '',
  date: '',
  text: '',
};

export default CommentDetail;
