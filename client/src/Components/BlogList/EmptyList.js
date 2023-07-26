import React from 'react';
import './styles.css';

const EmptyList = () => (
  <div className='text-center'>
  <div className='emptyList-wrap'>
    <h1>Something went wrong!</h1>
    <img src="https://media1.giphy.com/media/vN1M06nbc9tnnrDfqR/giphy.gif?cid=6c09b952ewrmqgetefmcyhq63sfo96v34ja7lvx9fihuyg49&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt='empty' />
  </div>
  </div>
);

export default EmptyList;