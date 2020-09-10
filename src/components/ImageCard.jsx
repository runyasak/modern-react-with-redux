import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { image: { description, urls } } = this.props;

    return (
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
