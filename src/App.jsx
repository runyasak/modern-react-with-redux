import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message }),
    );
  }

  render() {
    const { lat, errorMessage } = this.state;

    if (errorMessage) {
      return (
        <div>
          Error:
          {errorMessage}
        </div>
      );
    }

    if (lat) {
      return (
        <div>
          Latitude:
          {lat}
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}
