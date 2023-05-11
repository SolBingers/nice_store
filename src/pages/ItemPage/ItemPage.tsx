import React, { FC, useEffect, useState } from 'react';
import { About } from '../../components/About';
import { TecSpecs } from '../../components/TechSpecs';
import { ProductList } from '../../components/ProductList';
import { ProductDetails } from '../../components/ProductDetails';
import { Categories } from '../../components/Categories';

import itemPage from './ItemPage.module.scss';
import { getPhoneById, getPhonesByType } from '../../api/phones';
import { useParams } from 'react-router-dom';
import { Phone, PhoneSpec } from '../../components/types/types';


export const ItemPage: FC = () => {
  const { itemId ='0' } = useParams();
  console.log();
  
  const [phoneSpec, setPhoneSpec] = useState<PhoneSpec | null>(null);
  const [phone, setPhones] = useState<Phone[]>([]);

  console.log(phoneSpec);
  

  useEffect(() => {
    getPhoneById(itemId)
      .then((response: PhoneSpec) => {
        setPhoneSpec(response);
      })
      .catch((error: Error) => console.warn(error));
  }, []);
 
  return (
    <>
      <div className={itemPage.product}>
        <Categories />
        <ProductDetails />
      </div>

      <div className={itemPage.productInfo}>
        <div className={itemPage.about}>
          <About phoneSpec={phoneSpec} />
        </div>

        <div className={itemPage.techSpecs}>
          <TecSpecs phoneSpec={phoneSpec} />
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