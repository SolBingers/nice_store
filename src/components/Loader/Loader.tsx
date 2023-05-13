import React from 'react';
import loader from './Loader.module.scss';
import MyLogo from '../../images/dog.svg';

export const Loader: React.FC = () => (
  <div className={loader.loader}>
    <div className={loader.circle}>
      <img src={MyLogo} alt="loader_dog" className={loader.dog} />
    </div>
  </div>
);
