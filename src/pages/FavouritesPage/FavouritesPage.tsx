import React, { FC, useState } from 'react';
import { List } from '../../components/List';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage: FC = () => {
  const [favComp] = useState(true);

  return (
    <div className={styles.favorites}>
      <div className={styles.favorites__container}>
        <h1 className={styles.favorites__title}>
        Favorites
        </h1>
        <div className={styles.favorites__list}>
          <List 
            products={[]}
            favComp={favComp}
          />
        </div>
      </div>
    </div>
  );
};