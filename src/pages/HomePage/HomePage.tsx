import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { Header } from '../../components/Header';

export const HomePage: FC = () => (
  <>
    <Header />
    <Categories />
  </>
);
