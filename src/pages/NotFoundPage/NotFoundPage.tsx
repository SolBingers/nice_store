import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import notFoundPage from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => (
  <div className={`${notFoundPage['not-found-page']}`}>
    <h1 className={notFoundPage.heading}>
      404
    </h1>

    <p className={notFoundPage.message}>
      Oops! Page not found!
    </p>

    <Link to="/" className={notFoundPage.link}>
      Go To Homepage
    </Link>
  </div >
);