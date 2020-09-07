import React from 'react';
import SeasonDisplay from './SeasonDisplay';

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
      return <SeasonDisplay lat={lat} />;
    }

    return <div>Loading...</div>;
  }
}
