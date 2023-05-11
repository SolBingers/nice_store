import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { Header } from '../../components/Header';
import { FirstBanner } from '../../components/FirstBanner';
import homePage from './HomePage.module.scss';

export const HomePage: FC = () => (
  <>
    <div className={homePage.intro}>
      <Categories />
      <FirstBanner />
    </div>
  </>
);
