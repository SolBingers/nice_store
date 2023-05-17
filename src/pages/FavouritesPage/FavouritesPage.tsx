import React, { FC, useContext, useState } from 'react';
import { List } from '../../components/List';
import styles from './FavouritesPage.module.scss';
import { FavoriteContext } from '../../contexts/favoriteContext';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import { Color } from '../../types/Color';

export const FavouritesPage: FC = () => {
  const [favComp] = useState(true);
  
  const { phones } = useContext(FavoriteContext);
  return (
    <>
      <div className={styles.favorites}>
        <div className={styles.favorites__container}>
          <h1 className={classNames(styles.favorites__title,{
            [styles.remove__radius]:phones.length !== 0,
          })}>
            Favorites
          </h1>
          <div className={styles.favorites__list}>
            {phones.length !== 0 ? (
              <List 
                products={phones}
                favComp={favComp}
              />
            ) : (
              <div className={styles.favorites__emptyList}>
                <div className={styles.favorites__emptyCart}/>
                <h2 className={styles.favorites__emptyList_title}>
                  Oops! Your favorite is empty
                </h2> 
                <div>
                  Fill it up with goods
                </div>  
                      
                
                
              </div>
            )}
            
          </div>
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