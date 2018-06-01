import React from 'react';
import LazyLoad from 'vanilla-lazyload';

import './Gallery.css';
import imagesArray from './images.json';
import { GalleryPhoto } from './GalleryPhoto';

export const Gallery = () => {
  new LazyLoad({ elements_selector: '.aGalleryPhoto' });
  return (
    <ul className="imageGallery">
      {imagesArray.map(imageData => <GalleryPhoto imageData={imageData} />)}
    </ul>
  );
};
