import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import style from './ImageGallery.module.css'

const ImageGallery = function ({list, toOpen}) {
  return (
  <ul className={style.ImageGallery}>
      {list.map(el => <ImageGalleryItem toOpen={toOpen} key={el.id} item={el}/>)}
  </ul>
  )}

export default ImageGallery;