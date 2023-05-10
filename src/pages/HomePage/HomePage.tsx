import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { FirstBanner } from '../../components/FirstBanner';
import homePage from './HomePage.module.scss';
import { ProductList } from '../../components/ProductList';
import { CategoryBlock } from '../../components/CategoryBlock';
import { SaleBanner } from '../../components/SaleBanner';
import phones from '../../phonesForTest.json';

export const HomePage: FC = () => (
  <main className={homePage.main}>
    <div className={homePage.container}>
      <div className={homePage.intro}>
        <Categories />
        <div className={homePage.banner}>
          <FirstBanner />
        </div>
      </div>

      <article className={homePage.productList}>
        <ProductList title={'Shop now'} products={phones} />
      </article>

      <article className={homePage.categoryBlock}>
        <CategoryBlock />
      </article>

      <article className={homePage.saleBanner}>
        <SaleBanner />
      </article>

      <article className={homePage.productList}>
        <ProductList title={'Shop now'} products={phones} />
      </article>
    </div>
  </main>
);