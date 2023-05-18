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
import { ProductItem } from '../../types/ProductItem';
import { ProductItemSpec } from '../../types/ProductItemSpec';
import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import classNames from 'classnames';

type Props = {
  className?: string;
};

export const ItemPage: FC<Props> = ({ className }) => {
  const { itemId = '0' } = useParams();

  const {
    data: phoneSingle,
    isLoading,
    refetch,
  } = useQuery<ProductItemSpec>('phone', () => getItemById(itemId));

  const { data: phones = [] } = useQuery<ProductItem[]>('phones', () =>
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
        <main className={classNames(className, itemPage.main)}>
          <div className={itemPage.container}>
            <Categories />

            <div className={itemPage.product}>
              <ProductDetails phoneData={phoneSingle} />

              <div className={itemPage.productInfo}>
                <div className={itemPage.about}>
                  <About ProductItemSpec={phoneSingle} />
                </div>

                <div className={itemPage.techSpecs}>
                  <TecSpecs ProductItemSpec={phoneSingle} />
                </div>
              </div>
            </div>
          </div>

          <div className={itemPage.productList}>
            <ProductList title={'You may also like'} products={phones} />
          </div>
        </main>
      )}
    </>
  );
};
