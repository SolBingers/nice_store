import React, { FC, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import header from './Header.module.scss';
import { ReactComponent as Burger } from '../../images/burger.svg';
import { ReactComponent as Favourites } from '../../images/favourites.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import classNames from 'classnames';
import { BurgerMenu } from '../BurgerMenu';
import { ModalMenu } from '../ModalMenu';
import { CartCounter } from '../CartCounter';
import { SearchOnWebsite } from '../SearchOnWebsite';
import { ThemeToggler } from '../ThemeToggler';
import MyLogo from '../../images/dog.svg';
import { SignedIn, SignedOut, useClerk, useUser } from '@clerk/clerk-react';

type Props = {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();
  const location = useLocation();
  const endpoint = location.pathname;

  return (
    <>
      <header className={
        classNames(header.header, className)
      }>
        {isOpenedModal && (
          <ModalMenu isOpen={isOpenedModal} setIsOpen={setIsOpenedModal} />
        )}


        {endpoint !== '/checkout' && (
          <SearchOnWebsite/>
        )}

        <div className={header.section}>
          <Link
            to="/"
            className={header.homeLink}
          >
            N🤝ce
          </Link>

          <ThemeToggler />

          <button className={classNames(header.button, header.burgerButton)}>
            <Burger
              className={header.burgerImage} 
              onClick={() => setIsOpened(true)}
            />
          </button>
        </div>
        {endpoint !== '/checkout' && (
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
            <button 
              className={header.button}
              onClick={() => setIsOpenedModal(true)}
            >
              <Cart className={classNames(header.cart, header.icon)} />
              <CartCounter/>
            </button>
          </div>
        )}

        <div className={header.userAccount}>
          <SignedIn>
            <button 
              className={classNames(header.button, header.loginButton)}
              onClick={() => signOut()}
            >
              <img
                src={user?.profileImageUrl}
                alt="loader_dog"
                className={header.userimage}
              />
            </button>

            <p className={header.userName}>
              {user?.fullName}
            </p>
          </SignedIn>

          <SignedOut>
            <Link to="/auth">
              <button className={classNames(header.button, header.loginButton)}>
                <img
                  src={MyLogo}
                  alt="loader_dog"
                  className={header.dog}
                />
              </button>
            </Link>

            <p className={header.userName}>
              Guest
            </p>
          </SignedOut>
        </div>

        <BurgerMenu isOpen={isOpened} setIsOpen={setIsOpened}/>
      </header>
    </>
  );
};
