import React, { FC, useEffect, useState } from 'react';
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
import {
  SignInButton,
  SignedIn,
  SignedOut,
  useClerk,
  useUser,
} from '@clerk/clerk-react';

type Props = {
  className?: string;
};

export const Header: FC<Props> = ({ className }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenedUserOptions, setIsOpenedUserOptions] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();
  const location = useLocation();
  const endpoint = location.pathname;

  const handleUserAccountClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsOpenedUserOptions((prev) => !prev);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsOpenedUserOptions(false);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <header className={classNames(header.header, className)}>
        {isOpenedModal && (
          <ModalMenu isOpen={isOpenedModal} setIsOpen={setIsOpenedModal} />
        )}

        <div className={header.section}>
          <Link to="/" className={header.homeLink}>
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
        <div className={header.section}>
          {endpoint !== '/checkout' && (
            <div className={header.section}>
              <SearchOnWebsite />

              <NavLink
                className={({ isActive }) =>
                  classNames(header.button, {
                    [header.activeLink]: isActive,
                  })
                }
                to="/favourites"
              >
                <Favourites
                  className={classNames(header.favourites, header.icon)}
                />
              </NavLink>
              <button
                className={header.button}
                onClick={() => setIsOpenedModal(true)}
              >
                <Cart className={classNames(header.cart, header.icon)} />
                <CartCounter />
              </button>
            </div>
          )}
          <SignedIn>
            <div 
              className={header.userAccount}
              onClick={handleUserAccountClick}
            >
              <button
                className={classNames(header.button, header.loginButton)}
              >
                <img
                  src={user?.profileImageUrl}
                  alt="loader_dog"
                  className={header.userImage}
                />
              </button>

              <p className={header.userName}>{user?.fullName}</p>

              <div
                className={classNames(header.userOptions, {
                  [header.userOptionsOpened]: isOpenedUserOptions,
                })}
              >
                <Link to="orders" className={header.userOption}>
                  Orders
                </Link>
                <div
                  className={classNames(header.userOption, header.logOutButton)}
                  onClick={() => signOut()}
                >
                  Log out
                </div>
              </div>
            </div>
          </SignedIn>

          <SignedOut>
            <div className={header.userAccount}>
              <SignInButton mode="modal" redirectUrl="/nice_store">
                <button
                  className={classNames(header.button, header.loginButton)}
                >
                  <img src={MyLogo} alt="loader_dog" className={header.dog} />
                </button>
              </SignInButton>
              <p className={header.userName}>Guest</p>
            </div>
          </SignedOut>
        </div>
        <BurgerMenu isOpen={isOpened} setIsOpen={setIsOpened} />
      </header>
    </>
  );
};
