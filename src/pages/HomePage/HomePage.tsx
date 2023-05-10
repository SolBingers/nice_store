import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { Header } from '../../components/Header';        
import { NavLink } from 'react-router-dom';

export const HomePage: FC = () => (
  <>
    <Header />
    <Categories />
    <NavLink
      to="favourites"
    >
      FPage
    </NavLink>
  </>
);