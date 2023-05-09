import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import header from './Header.module.scss';
import { SearchBar } from '../SearchBar';

export const Header: FC = () => {
  return (
    <header className={header.header}>
      <div className={header.section}>
        <Link to="/" className={header.homeLink}>
          N🤝ce
        </Link>
        <div>burger</div>
      </div>

      <div className={header.section}>
        <SearchBar />
      </div>

      <div className={header.section}>
        <div>like</div>
        <div>cart</div>
      </div>
    </header>
  );
};
