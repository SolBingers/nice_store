import React, { FC } from 'react';
import { About } from '../../components/About';
import { TecSpecs } from '../../components/TechSpecs';
import { ProductList } from '../../components/ProductList';
import { ProductDetails } from '../../components/ProductDetails';
import { Categories } from '../../components/Categories';

import phoneSpec from '../../phoneSpecForTest.json';
import phone from '../../phonesForTest.json';
import itemPage from './ItemPage.module.scss';

export const ItemPage: FC = () => {
  return (
    <>
      <div className={itemPage.product}>
        <Categories />
        <ProductDetails />
      </div>

      <div className={itemPage.productInfo}>
        <div className={itemPage.about}>
          <About phoneSpec={phoneSpec}/>
        </div>

        <div className={itemPage.techSpecs}>
          <TecSpecs />
        </div>
      </div>

      <div className={itemPage.productList}>
        <ProductList
          title={'You may also like'}
          products={phone}
        />
      </div>

    </>
  );
};