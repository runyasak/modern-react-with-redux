// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const comments = [
  {
    name: 'Sam',
    avatar: 'https://picsum.photos/60/60',
    timeAgo: 'Today at 6:00 PM',
    text: 'Nice blog post!',
  },
  {
    name: 'Sarah',
    avatar: 'https://picsum.photos/60/60',
    timeAgo: 'Today at 6:00 PM',
    text: 'Nice blog post!',
  },
];

// Create a react component
const App = () => (
  <div className="ui container comments">
    {comments.map((comment, index) => <CommentDetail key={index} {...comment} />)}
  </div>
);

// take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));
