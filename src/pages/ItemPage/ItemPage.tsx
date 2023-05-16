import React, { FC, useEffect } from 'react';
import { About } from '../../components/About';
import { TecSpecs } from '../../components/TechSpecs';
import { ProductList } from '../../components/ProductList';
import { ProductDetails } from '../../components/ProductDetails';
import { Categories } from '../../components/Categories';
import itemPage from './ItemPage.module.scss';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getItemById, getItemRecomended } from '../../api/products';
import { Phone, PhoneSpec } from '../../components/types/types';
import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const ItemPage: FC = () => {
  const { itemId = '0' } = useParams();

  const { data: phoneSingle, isLoading, refetch } = useQuery<PhoneSpec>('phone', () =>
    getItemById(itemId),
  );

  const { data: phones = [] } = useQuery<Phone[]>('phones', () =>
    getItemRecomended(itemId),
  );

  useEffect(() => {
    refetch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [itemId]);

  return (
    <>
      <BreadCrumbs />

      {!phoneSingle || isLoading ? (
        <div className={itemPage.loader}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={itemPage.product}>
            <Categories />
            <ProductDetails phoneData={phoneSingle} />
          </div>

          <div className={itemPage.productInfo}>
            <div className={itemPage.about}>
              <About phoneSpec={phoneSingle} />
            </div>

            <div className={itemPage.techSpecs}>
              <TecSpecs phoneSpec={phoneSingle} />
            </div>
          </div>

          <div className={itemPage.productList}>
            <ProductList title={'You may also like'} products={phones} />
          </div>
        </>
      )}
    </>
  );
};
