import React, { Dispatch, FC, SetStateAction} from 'react';
import styles from './BurgerMenu.module.scss';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<Props> = ({
  isOpen,
  setIsOpen,
}) => {

  const itemsLink = [
    {
      path:'/category/phones',
      title:'Phones'
    },
    {
      path:'/category/tablets',
      title:'Tablets'
    },
    {
      path:'/category/accessories',
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
              key={path}
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