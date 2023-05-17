import React, { FC, useContext, useState } from 'react';
import { List } from '../../components/List';
import styles from './FavouritesPage.module.scss';
import { FavoriteContext } from '../../contexts/favoriteContext';
import { ToastContainer } from 'react-toastify';
import { Color } from '../../types/Color';

export const FavouritesPage: FC = () => {
  const [favComp] = useState(true);
  
  const { phones } = useContext(FavoriteContext);
  return (
    <>
      <div className={styles.favorites}>
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        progressStyle={{background: Color.Primary}}
        className={'customNotification'}
        closeButton={false}
        draggable
        pauseOnHover
        theme='light'
        toastStyle={{color: Color.Grey}}
      />
    </>
  );
};