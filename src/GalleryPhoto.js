import React from 'react';
import './GalleryPhoto.css';
/**
 * Takes image data and converts it to an image tag
 * @param {object} props
 * @param {object} props.imageData
 * @param {string} props.imageData.lowRes -a src for the low res version of the image
 * @param {string} props.imageData.mediumRes -a src for the medium res version of the image
 * @param {string} props.imageData.highRes -a src for the high res version of the image
 * @param {number} props.imageData.imageHeight - high res image height in pixels
 * @param {number} props.imageData.imageWidth - high res image Width in pixels
 */
export const GalleryPhoto = props => {
  return (
    <li>
      <img
        src={props.imageData.highRes}
        alt="a dog or a cat"
        className="aGalleryPhoto"
      />
    </li>
  );
};
