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
import { ProductItem, ProductItemSpec } from '../../types/types';
import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const ItemPage: FC = () => {
  const { itemId = '0' } = useParams();

  const { data: phoneSingle, isLoading, refetch } = useQuery<ProductItemSpec>('phone', () =>
    getItemById(itemId),
  );

  const { data: phones = [] } = useQuery<ProductItem[]>('phones', () =>
    getItemRecomended(itemId),
  );

  useEffect(() => {
    refetch();
  }, [itemId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

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
              <About ProductItemSpec={phoneSingle} />
            </div>

            <div className={itemPage.techSpecs}>
              <TecSpecs ProductItemSpec={phoneSingle} />
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
