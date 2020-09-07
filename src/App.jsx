import React from 'react';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const comments = [
  {
    author: 'Sam',
    avatar: 'https://picsum.photos/60/60',
    timeAgo: 'Today at 6:00 PM',
    content: 'Nice blog post!',
  },
  {
    author: 'Sarah',
    avatar: 'https://picsum.photos/60/60',
    timeAgo: 'Today at 6:00 PM',
    content: 'Nice blog post!',
  },
];

export default () => (
  <div className="ui container comments">
    {comments.map((comment, index) => (
      <ApprovalCard>
        <CommentDetail key={index} {...comment} />
      </ApprovalCard>
    ))}
  </div>
);
