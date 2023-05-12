import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { FirstBanner } from '../../components/FirstBanner';
import homePage from './HomePage.module.scss';
import { ProductList } from '../../components/ProductList';
import { CategoryBlock } from '../../components/CategoryBlock';
import { SaleBanner } from '../../components/SaleBanner';

export const HomePage: FC = () => {

  return (
    <main className={homePage.main}>
      <div className={homePage.slider}>

        <Categories />
        <FirstBanner />
      </div>
      
      <article className={homePage.productList}>
        <ProductList title={'Shop now'} products={[]} />
      </article>

      <article className={homePage.categoryBlock}>
        <CategoryBlock />
      </article>

      <article className={homePage.saleBanner}>
        <SaleBanner />
      </article>

      <article className={homePage.productList}>
        <ProductList title={'Shop now'} products={[]} />
      </article>
    </main>
  );
};
