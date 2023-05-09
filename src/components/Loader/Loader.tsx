import React from 'react';
import './loader.scss';
import MyLogo from '../../images/dog.svg';

export const Loader: React.FC = () => (
  <div className='container'>
    <div className="loader">
      <div className="loader_circle">
        <img src={ MyLogo } alt="loader_dog" className='loader_dog'></img>
      </div>
    </div>
  </div>
);