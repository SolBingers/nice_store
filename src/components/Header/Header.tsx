import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import header from './Header.module.scss';
import { SearchBar } from '../SearchBar';
import { ReactComponent as Burger } from '../../images/burger.svg';
import { ReactComponent as Favourites } from '../../images/favourites.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import { ReactComponent as Lens } from '../../images/lens.svg';
import classNames from 'classnames';

export const Header: FC = () => {
  return (
    <header className={header.header}>
      <div className={header.section}>
        <Link to="/" className={header.homeLink}>
          N🤝ce
        </Link>
        <button className={classNames(header.button, header.burgerButton)}>
          <Burger className={header.burgerImage} />
        </button>
      </div>

      <div className={header.section}>
        <SearchBar />
      </div>

      <div className={header.section}>
        <button className={classNames(header.button, header.lensButton)}>
          <Lens className={classNames(header.lens, header.icon)} />
        </button>
        <button className={header.button}>
          <Favourites className={classNames(header.favourites, header.icon)} />
        </button>
        <button className={header.button}>
          <Cart className={classNames(header.cart, header.icon)} />
        </button>
      </div>
    </header>
  );
};
