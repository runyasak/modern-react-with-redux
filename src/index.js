// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src="https://picsum.photos/60/60" alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 PM</span>
          </div>
          <div className="text">
            Nice blog post!
          </div>
        </div>
      </div>
    </div>
  )
}

// take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'))
