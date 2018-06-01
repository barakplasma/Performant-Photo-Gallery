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
      <picture>
        <source srcset={props.imageData.highRes} media="(min-height: 1280px)" />
        <source
          srcset={props.imageData.mediumRes}
          media="(min-height: 640px)"
        />
        <img
          src={props.imageData.lowRes}
          className="aGalleryPhoto"
          alt="a dog or a cat"
        />
      </picture>
    </li>
  );
};
