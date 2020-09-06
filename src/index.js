// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

const getButtontext = () => 'Click on Me!'

// Create a react component
const App = () => {
  const buttonText = { text: 'Click me' }
  const labelText = 'Enter name:'

  return (
    <div>
      <label htmlFor="name" className="label">{labelText}</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  )
}

// take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'))
