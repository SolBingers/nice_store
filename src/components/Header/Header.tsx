import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import header from './Header.module.scss';
import { SearchBar } from '../SearchBar';
import { ReactComponent as Burger } from '../../images/burger.svg';
import { ReactComponent as Favourites } from '../../images/favourites.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';

export const Header: FC = () => {
  return (
    <header className={header.header}>
      <div className={header.section}>
        <Link to="/" className={header.homeLink}>
          N🤝ce
        </Link>
        <button className={header.burgerButton}>
          <Burger className={header.burgerImage} />
        </button>
      </div>

      <div className={header.section}>
        <SearchBar />
      </div>

      <div className={header.section}>
        <Favourites className={header.favourites} />
        <Cart className={header.cart} />
      </div>
    </header>
  );
};
