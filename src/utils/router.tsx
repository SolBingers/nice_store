import React from 'react';
import { Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { PhonesPage } from '../pages/PhonesPage';
import { ItemPage } from '../pages/ItemPage';
import { TabletsPage } from '../pages/TabletsPage';
import { AccessoriesPage } from '../pages/AccessoriesPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { ContactsPage } from '../pages/ContactsPage';
import { SearchPage } from '../pages/SearchPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { SignInPage } from '../pages/SignInPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path='/' element={<HomePage />} >
        
      </Route>

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

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  ));