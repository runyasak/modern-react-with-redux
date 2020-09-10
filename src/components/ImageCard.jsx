import React from 'react';

class ImageCard extends React.Component {
  rowGap = 10

  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.handleImageLoad);
  }

  get calculateSpans() {
    const height = this.imageRef.current.clientHeight;

    return Math.ceil(height / this.rowGap);
  }

  setSpans = (spans) => {
    this.setState({ spans });
  }

  handleImageLoad = () => {
    this.setSpans(this.calculateSpans);
  }

  render() {
    const { image: { description, urls } } = this.props;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
