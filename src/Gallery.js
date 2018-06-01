import React from 'react';

import './Gallery.css';
import imagesArray from './images.json';
import { GalleryPhoto } from './GalleryPhoto';

export const Gallery = () => {
  return (
    <ul className="imageGallery">
      {imagesArray.map((imageData, index) => (
        <GalleryPhoto imageData={imageData} key={index} />
      ))}
    </ul>
  );
};
