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
            isClosed ? styles.rotate : null,
          )} 
        />
      </div>
      {!isClosed && (
        <div className={styles.categories__dropdown}>
          <NavLink 
            className={styles.categories__customLink} 
            to="/Phones" 
            title="Phones" 
          >
            Phones
          </NavLink>  
          <NavLink
            className={styles.categories__customLink} 
            to="/Tablets" 
            title="Tablets" 
          >
            Tablets
          </NavLink>  
          <NavLink
            className={styles.categories__customLink}
            to="/Accessories" 
            title="Accessories"
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