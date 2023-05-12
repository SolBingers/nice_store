import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import header from './Header.module.scss';
import { ReactComponent as Burger } from '../../images/burger.svg';
import { ReactComponent as Favourites } from '../../images/favourites.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import classNames from 'classnames';
import { BurgerMenu } from '../BurgerMenu';

type Props = {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header className={
      classNames(header.header, className)
    }>
      <div className={header.section}>
        <Link to="/" className={header.homeLink}>
          N🤝ce
        </Link>
        <button className={classNames(header.button, header.burgerButton)}>
          <Burger 
            className={header.burgerImage} 
            onClick={() => setIsOpened(true)}
          />
        </button>
      </div>

      <div className={header.section}>
        <NavLink
          className={({ isActive }) => classNames(
            header.button,
            {
              [header.activeLink]: isActive,
            },
          )}  
          to="/favourites"  
        >
          <Favourites className={classNames(header.favourites, header.icon)} />
        </NavLink>
        <button className={header.button}>
          <Cart className={classNames(header.cart, header.icon)} />
        </button>
      </div>
      <BurgerMenu isOpen={isOpened} setIsOpen={setIsOpened}/>
    </header>
  );
};
