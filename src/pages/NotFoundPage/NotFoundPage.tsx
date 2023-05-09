import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: FC = () => (
  <div className="not-found-page">
    <h1 className="not-found-page__heading">
      404
    </h1>

    <p className="not-found-page__message">
      Oops! Page not found!
    </p>

    <Link to="/" className="not-found-page__link">
      Go To Homepage
    </Link>
  </div>
);