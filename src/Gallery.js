import React from 'react';

import './Gallery.css';
import { GalleryPhoto } from './GalleryPhoto';

import jsf from 'json-schema-faker';

const imageSchema = {
  type: 'array',
  minItems: 1,
  maxItems: 1000,
  items: {
    properties: {
      highRes: {
        $ref: '#/definitions/highResPhotoUrl'
      },
      mediumRes: {
        $ref: '#/definitions/photoUrl'
      },
      lowRes: {
        $ref: '#/definitions/photoUrl'
      },
      imageHeight: {
        $ref: '#/definitions/imageDimension'
      },
      imageWidth: {
        $ref: '#/definitions/imageDimension'
      }
    },
    required: ['imageHeight', 'imageWidth', 'highRes', 'mediumRes', 'lowRes']
  },
  definitions: {
    photoUrl: {
      enum: [
        'https://loremflickr.com/320/240/dog',
        'https://loremflickr.com/600/480/dog',
        'https://loremflickr.com/600/600/dog'
      ]
    },
    highResPhotoUrl: {
      enum: [
        'https://loremflickr.com/1920/1080/dog',
        'https://loremflickr.com/1024/960/dog',
        'https://loremflickr.com/800/600/dog'
      ]
    },
    imageDimension: {
      type: 'number',
      multipleOf: 1,
      minimum: 1,
      maximum: 4096
    }
  }
};

export const Gallery = () => {
  const imagesArray = jsf.generate(imageSchema);
  return (
    <ul className="imageGallery">
      {imagesArray.map((imageData, index) => (
        <GalleryPhoto imageData={imageData} key={index} />
      ))}
    </ul>
  );
};
