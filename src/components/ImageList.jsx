import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
  const imageHtmls = images.map(({ description, id, urls }) => (
    <ImageCard key={id} image={{ description, urls }} />
  ));

  return <div className="image-list">{imageHtmls}</div>;
};

export default ImageList;
