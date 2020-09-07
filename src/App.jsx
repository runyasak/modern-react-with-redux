import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => { throw new Error(err.message); },
    );
  }

  render() {
    const { lat } = this.state;

    return (
      <div>
        Latitude:
        {lat}
      </div>
    );
  }
}
