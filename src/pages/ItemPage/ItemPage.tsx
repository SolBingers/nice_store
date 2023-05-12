import React, { FC } from 'react';
import { About } from '../../components/About';
import { TecSpecs } from '../../components/TechSpecs';
import { ProductList } from '../../components/ProductList';
import { ProductDetails } from '../../components/ProductDetails';
import { Categories } from '../../components/Categories';

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
          <About phoneSpec={null} />
        </div>

        <div className={itemPage.techSpecs}>
          <TecSpecs phoneSpec={null} />
        </div>
      </div>

      <div className={itemPage.productList}>
        <ProductList
          title={'You may also like'}
          products={[]}
        />
      </div>
    </>
  );
};