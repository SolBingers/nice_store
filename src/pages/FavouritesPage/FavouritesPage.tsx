import React, { FC, useEffect, useState } from 'react';
import { List } from '../../components/List';
import styles from './FavouritesPage.module.scss';
import { useLocalStoragePhones } from '../../customHooks/useLocalStorage';

export const FavouritesPage: FC = () => {
  const [favComp] = useState(true);
  const [phones,] = useLocalStoragePhones('phones');

  useEffect(() =>{
    console.log(phones);
  },[phones]);

  return (
    <div className={styles.favorites}>
      <div className={styles.favorites__container}>
        <h1 className={styles.favorites__title}>
          Favorites
        </h1>
        <div className={styles.favorites__list}>
          {phones.length !== 0 ? (
            <List 
              products={phones}
              favComp={favComp}
            />
          ) : (
            <h2 className={styles.favorites__emptyList}>
              Your favorite list is empty.
            </h2>
          )}
          
        </div>
      </div>
    </div>
  );
};