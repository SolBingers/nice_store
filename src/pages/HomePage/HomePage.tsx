import React, { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { FirstBanner } from '../../components/FirstBanner';
import homePage from './HomePage.module.scss';
import { ProductList } from '../../components/ProductList';
import { CategoryBlock } from '../../components/CategoryBlock';
import { SaleBanner } from '../../components/SaleBanner';
import { getProductsByType } from '../../api/products';
import { useQuery } from 'react-query';
import { Loader } from '../../components/Loader';

const getPhones = async (type: 'discount' | 'new') => {
  const loadData = await getProductsByType(type);

  return loadData;
};

export const HomePage: FC = () => {
  const { data: discountData } = useQuery('discount', () =>
    getPhones('discount'),
  );

  const { data: newData } = useQuery('new', () => getPhones('new'));

  return (
    <main className={homePage.main}>
      <div className={homePage.slider}>
        <Categories />

        <FirstBanner />
      </div>

      <article className={homePage.productList}>
        {!discountData ? (
          <div className={homePage.loader}>
            <h2 className={homePage.loader__title}>Hot prices</h2>

            <Loader />
          </div>
        ) : (
          <ProductList title="Hot prices" products={discountData} />
        )}
      </article>

      <article className={homePage.categoryBlock}>
        <CategoryBlock />
      </article>

      <article className={homePage.saleBanner}>
        <SaleBanner />
      </article>

      <article className={homePage.productList}>
        {!newData ? (
          <div className={homePage.loader}>
            <h2 className={homePage.loader__title}>Brand NEW</h2>

            <Loader />
          </div>
        ) : (
          <ProductList title="Brand NEW" products={newData} />
        )}
      </article>
    </main>
  );
};
