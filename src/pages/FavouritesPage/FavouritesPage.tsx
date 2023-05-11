import React, { FC, useState } from 'react';
import { Header } from '../../components/Header';
import { List } from '../../components/List';
import styles from './FavouritesPage.module.scss';
import phonesJson from './phones.json';
import { Footer } from '../../components/Footer';

export const FavouritesPage: FC = () => {
  const [favComp] = useState(true);

  return (
    <div className={styles.favorites}>
      <Header />
      <h1 className={styles.favorites__title}>
        Favorites
      </h1>
      <div className={styles.favorites__list}>
        <List 
          products={phonesJson}
          favComp={favComp}
        />
      </div>
      <div className={styles.favorites__footer}>
        <Footer />
      </div> 
    </div>
  );
};