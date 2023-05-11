import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import header from './Header.module.scss';
import { ReactComponent as Burger } from '../../images/burger.svg';
import { ReactComponent as Favourites } from '../../images/favourites.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import classNames from 'classnames';
import { BurgerMenu } from '../BurgerMenu';
import { ModalMenu } from '../ModalMenu';

type Props = {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  return (
    <>
      <ModalMenu isOpen={isOpenedModal} setIsOpen={setIsOpenedModal} />

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
          <button className={header.button}>
            <Favourites className={classNames(header.favourites, header.icon)} />
          </button>
          <button 
            className={header.button}
            onClick={() => setIsOpenedModal(true)}
          >
            <Cart className={classNames(header.cart, header.icon)} />
          </button>
        </div>
        <BurgerMenu isOpen={isOpened} setIsOpen={setIsOpened}/>
      </header>
    </>
  );
};
