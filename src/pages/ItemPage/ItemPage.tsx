import React, { FC } from 'react';
import { About } from '../../components/About';
import { TecSpecs } from '../../components/TechSpecs';
import { ProductList } from '../../components/ProductList';
import { ProductDetails } from '../../components/ProductDetails';
import { Categories } from '../../components/Categories';
import itemPage from './ItemPage.module.scss';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPhoneById, getPhoneRecomended } from '../../api/phones';
import { Phone, PhoneSpec } from '../../components/types/types';
import { Loader } from '../../components/Loader';

export const ItemPage: FC = () => {
  const { itemId = '0' } = useParams();
  
  const { data: phoneSingle, isLoading } = useQuery<PhoneSpec>(
    'phone',
    () => getPhoneById(itemId)
  );

  const { data: phones = [] } = useQuery<Phone[]>(
    'phones',
    () =>  getPhoneRecomended(itemId)
  );

  return (
    <>
      {!phoneSingle || isLoading
        ? <Loader />
        : (
          <>
            <div className={itemPage.product}>
              <Categories />
              <ProductDetails phoneData={phoneSingle}/>
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
              <ProductList
                title={'You may also like'}
                products={phones}
              />
            </div>
          </>
        )}
    </>
  );
};
