import React from 'react';
import './ImageList.css';

const ImageList = ({ images }) => {
  const imageHtmls = images.map(({ description, id, urls: { regular } }) => (
    <img key={id} src={regular} alt={description} />
  ));

  return <div className="image-list">{imageHtmls}</div>;
};

export default ImageList;
