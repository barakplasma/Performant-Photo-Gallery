import React from 'react';
import './Gallery.css';
import imagesArray from './images.json';
import { GalleryPhoto } from './GalleryPhoto';

export const Gallery = () => (
  <ul className="imageGallery">
    {imagesArray.map(imageData => <GalleryPhoto imageData={imageData} />)}
  </ul>
);
