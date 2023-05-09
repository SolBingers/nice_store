import React, { FC, useState } from 'react';
import styles from './Categories.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Categories: FC = () => {
  const [isClosed,setIsClosed] = useState(false);

  
  return (
    <div className={styles.categories}>
      <div className={styles.categories__header}>
        <div className={styles.categories__title}>
          Categories
        </div>

        <button 
          onClick={() => setIsClosed(!isClosed)}
          className={classNames(
            styles.categories__input, 
            {
              [styles.rotate]: isClosed,
            }
          )} 
        />
      </div>
      {!isClosed && (
        <div className={styles.categories__dropdown}>
          <NavLink 
            className={({ isActive }) => classNames(
              styles.categories__customLink,
              {
                [styles.activeLink]: isActive,
              },
            )} 
            to="/category/phones"
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
            to="/category/tablets" 
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
            to="/category/accessories" 
          >
            Accessories
          </NavLink>

          <div className={styles.categories__rights}>
            All rights reserved.
          </div>
        </div>
      )}
    </div>
  );
};