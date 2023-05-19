import React, { FC, useContext, useState } from 'react';
import { List } from '../../components/List';
import styles from './FavouritesPage.module.scss';
import { Response } from '../../types/types';
import { FavoriteContext } from '../../contexts/favoriteContext';
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import { useQuery } from 'react-query';
import { getFavorites } from '../../api/products';

export const FavouritesPage: FC = () => {
  const { userId } = useAuth();
  const [favComp] = useState(true);
  const { phones } = useContext(FavoriteContext);

  const { data } = useQuery<Response>('favorites', () => getFavorites(userId));
  
  const favoritesData = data?.products;


  return (
    <>
      <SignedIn>
        <div className={styles.favorites}>
          <h1 className={styles.favorites__title}>
            Favorites
          </h1>
          <div className={styles.favorites__list}>
            {favoritesData?.length !== 0 ? (
              <List 
                products={favoritesData}
                favComp={favComp}
              />
            ) : (
              <h2 className={styles.favorites__emptyList}>
                Your favorite list is empty.
              </h2>
            )}
          </div>
        </div>
      </SignedIn>

      <SignedOut>
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
      </SignedOut>
    </>
  );
};