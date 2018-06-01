import React from 'react';
import LazyLoad from 'react-lazyload';

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
      <LazyLoad height={300} offset={2000} once>
        <picture className="aGalleryPhoto">
          <source
            srcSet={props.imageData.highRes}
            media="(min-height: 1280px), (min-width: 1280px)"
          />
          <source
            srcSet={props.imageData.mediumRes}
            media="(min-height: 640px), (min-width: 640px)"
          />
          <img
            src={props.imageData.lowRes}
            className="aGalleryPhoto"
            alt="a dog or a cat"
          />
        </picture>
      </LazyLoad>
    </li>
  );
};
