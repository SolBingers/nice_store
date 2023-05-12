import React, { Dispatch, FC, SetStateAction} from 'react';
import styles from './BurgerMenu.module.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<Props> = ({
  isOpen,
  setIsOpen,
}) => {
  const { search } = useLocation();
  const itemsLink = [
    {
      path: {
        pathname: '/category/phones',
        search,
      },
      title:'Phones'
    },
    {
      path: {
        pathname: '/category/tablets',
        search,
      },
      title:'Tablets'
    },
    {
      path: {
        pathname: '/category/accessories',
        search,
      },
      title:'Accessories'
    },
  ];

  return (
    <>
      <div 
        className={classNames(styles.blur,{
          [styles.blur__visible]: isOpen === true,
        })}
        onClick={() => setIsOpen(false)}
      />

      <div className={classNames(styles.burger,{
        [styles.burger__visible]: isOpen === true,
      })}>
        <div className={styles.burger__header}>
          <Link to="/" className={styles.burger__homeLink}>
            N🤝ce
          </Link>

          <button 
            className={styles.burger__icon} 
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className={styles.categories__dropdown}>
          <div className={styles.categories__title}>
          Categories
          </div>

          {itemsLink.map(({path, title}) => (
            <NavLink 
              className={styles.categories__customLink} 
              to={path}
              key={path.pathname}
            >
              {title}
            </NavLink> 
          ))}

          <div className={styles.categories__rights}>
            All rights reserved.
          </div>
        </nav>
      </div>
    </>
      
  );
};