import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';

export const HomePage: FC = () => (
  <h1>
    Home Page
    <Categories />
  </h1>
);