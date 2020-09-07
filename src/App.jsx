import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      },
    );
  }

  render() {
    const { lat, errorMessage } = this.state;

    return (
      <div>
        Latitude:
        {lat}
        <br />
        Error:
        {errorMessage}
      </div>
    );
  }
}
