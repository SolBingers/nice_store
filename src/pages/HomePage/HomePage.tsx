import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
// секцію з категоріями і слайдерами порівняти по висоті
export const HomePage: FC = () => (
  <h1>
    Home Page
    <Categories />
  </h1>
);