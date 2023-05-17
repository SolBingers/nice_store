import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../../App.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ToTopButton } from '../ToTopButton';
import { ToastContainer } from 'react-toastify';
import { Color } from '../../types/Color';

export const Layout = () => {
  return (
    <>
      <div className={styles.app}>
        <Header className={styles.header} />

        <main className={styles.main} >
          <Outlet />
        </main>

        <Footer className={styles.footer} />

        <ToTopButton />
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
