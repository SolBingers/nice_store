import React from 'react';
import './loader.scss';
// es-lint disable-next-line
import dog from '../../images/dog.svg';

export const Loader: React.FC = () => (
  <div className='container'>
    <div className="loader">
      <div className="loader_circle">
        <img src={ dog } alt="loader_dog" className='loader_dog'></img>
      </div>
    </div>
  </div>
);