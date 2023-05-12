import React, { FC, useEffect, useState } from 'react';
import { About } from '../../components/About';
import { TecSpecs } from '../../components/TechSpecs';
import { ProductList } from '../../components/ProductList';
import { ProductDetails } from '../../components/ProductDetails';
import { Categories } from '../../components/Categories';

import itemPage from './ItemPage.module.scss';
import { getPhoneById, getPhoneRecomended } from '../../api/phones';
import { Phone, PhoneSpec } from '../../components/types/types';
import { useParams } from 'react-router-dom';

export const ItemPage: FC = () => {
  const { itemId = '0' } = useParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phoneSingle, setPhoneSingle] = useState<PhoneSpec| null>(null);
    

  useEffect(() => {
    const getPhones = async () => {
      try {
        const getPhone = await getPhoneById(itemId);
        setPhoneSingle(getPhone);
        // const getRecommended = await getPhoneRecomended(itemId);
        // console.log(itemId);
        
        // setPhones(getRecommended);

      } finally {
        console.log('Data');
      }
    };

    getPhones();
  }, []);
 
  
  return (
    <>
      <div className={itemPage.product}>
        <Categories />
        <ProductDetails />
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
  );
};