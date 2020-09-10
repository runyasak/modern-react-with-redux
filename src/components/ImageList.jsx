import React from 'react';

const ImageList = ({ images }) => images.map(({ description, id, urls: { regular } }) => (
  <img key={id} src={regular} alt={description} width="100%" />
));

export default ImageList;
