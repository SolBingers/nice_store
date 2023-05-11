import React, { FC } from 'react';
import { About } from '../../components/About';
import { TecSpecs } from '../../components/TechSpecs';
import { ProductList } from '../../components/ProductList';
import phoneSpec from '../../phoneSpecForTest.json';
import phone from '../../phonesForTest.json';
import itemPage from './ItemPage.module.scss';
// import { useParams } from 'react-router-dom';
export const ItemPage: FC = () => {
  // const { itemId } = useParams();

  return (
    <>
      <div className={itemPage.itemInfo}>
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