import React, { FC } from 'react';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { ContactsPage } from './pages/ContactsPage';
import { ItemPage } from './pages/ItemPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import styles from './App.module.scss';
import { ToTopButton } from './components/ToTopButton';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { SearchPage } from './pages/SearchPage';
import { SignInPage } from './pages/SignInPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import { Color } from './types/Color';
import './styles/notification.scss';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';

export const App: FC = () => {
  return (
    <>
      <div className={styles.app}>
        <Header className={styles.header} />

        <main className={styles.main} >
          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='phones'>
              <Route index element={<PhonesPage />} />
              <Route path=':itemId' element={<ItemPage />} />
            </Route>

            <Route path='tablets'>
              <Route index element={<TabletsPage />} />
              <Route path=':itemId' element={<ItemPage />} />
            </Route>

            <Route path='accessories'>
              <Route index element={<AccessoriesPage />} />
              <Route path=':itemId' element={<ItemPage />} />
            </Route>

            <Route path='favourites' element={<FavouritesPage />} />

            <Route path='contacts' element={<ContactsPage />} />

            <Route path='search' element={<SearchPage />} />
            
            <Route path='checkout' element={<CheckoutPage />} />

            <Route path='auth' element={<SignInPage />} />

            <Route path='orders' element={<OrdersPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
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

export default App;
