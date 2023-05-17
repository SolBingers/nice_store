import React, { FC, useState } from 'react';
import styles from './Categories.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as Arrow } from '../../images/chevron-down.svg';

type Props = {
  className?: string,
}

export const Categories: FC<Props> = ({ className }) => {
  const [isClosed,setIsClosed] = useState(false);
  const { search } = useLocation();

  return (
    <div className={classNames(
      styles.categories,
      className,
    )}>
      <div className={styles.categories__header}>
        <div className={styles.categories__title}>
          Categories
        </div>

        <Arrow 
          onClick={() => setIsClosed(!isClosed)}
          className={classNames(
            styles.categories__input, 
            {
              [styles.rotate]: isClosed,
            }
          )} 
        />
      </div>
      <nav className={classNames(
        styles.categories__dropdown,
        {
          [styles.invisible]: isClosed,
        }
      )}>
        <div className={styles.categories__container}>

          <NavLink 
            className={({ isActive }) => classNames(
              styles.categories__customLink,
              {
                [styles.activeLink]: isActive,
              },
            )} 
            to={{
              pathname: '/phones',
              search,
            }}
          >
            Phones
          </NavLink> 

          <NavLink
            className={({ isActive }) => classNames(
              styles.categories__customLink,
              {
                [styles.activeLink]: isActive,
              },
            )}  
            to={{
              pathname: '/tablets',
              search,
            }}
          >
            Tablets
          </NavLink>  

          <NavLink
            className={({ isActive }) => classNames(
              styles.categories__customLink,
              {
                [styles.activeLink]: isActive,
              },
            )} 
            to={{
              pathname: '/accessories',
              search,
            }}
          >
            Accessories
          </NavLink>
        </div>

        <div className={styles.categories__rights}>
          All rights reserved.
        </div>
      </nav>
    </div>
  );
};