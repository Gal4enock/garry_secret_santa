import React from 'react';

import style from './ImageGallery.module.css'

const ImageGallery = function ({list, toOpen}) {
  return (
  <ul className={style.ImageGallery}>
      {list.map(el => <li data-name={el.username} data-id={el._id} className={style.card} onClick={toOpen} key={el._id}></li>)}
  </ul>
  )}

export default ImageGallery;