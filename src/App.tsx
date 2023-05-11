import React, { FC } from 'react';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CategoryPage } from './pages/CategoryPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { ContactsPage } from './pages/ContactsPage';
import { ItemPage } from './pages/ItemPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductItem } from './components/ProductItem';
import phone from './images/phone.png';

const Product = {
  image: `${phone}`,
  title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
  onRemove: () => {return 1;},
  onDecrease: () => {return 1;},
  count: 1,
  onIncrease: () => {return 1;},
  price: 99,
};

export const App: FC = () => {
  return (
    <div className="App">
      < />
      <ProductItem productItem={Product}/>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path="category/:selectedCategory">
          <Route index element={<CategoryPage />} />
          <Route path=':itemId' element={<ItemPage />} />
        </Route>

        <Route path='favourites' element={<FavouritesPage />} />

        <Route path='contacts' element={<ContactsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
