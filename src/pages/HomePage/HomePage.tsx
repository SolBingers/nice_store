import React, { FC, useEffect, useState } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { FirstBanner } from '../../components/FirstBanner';
import homePage from './HomePage.module.scss';
import { ProductList } from '../../components/ProductList';
import { CategoryBlock } from '../../components/CategoryBlock';
import { SaleBanner } from '../../components/SaleBanner';
import { getAllPhones } from '../../api/phones';
import { Phone } from '../../components/types/types';



export const HomePage: FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const getPhonesFromServer = async () => {
      try {
        const phonesFromServer = await getAllPhones({});

        setPhones(phonesFromServer);
      } catch (error) {
        throw new Error('Cant load data');
      }
    };

    getPhonesFromServer();
  }, []);

  return (
    <main className={homePage.main}>
      <div className={homePage.slider}>

        <Categories />
        <FirstBanner />
      </div>
      
      <article className={homePage.productList}>
        <ProductList title={'Shop now'} products={phones} />
      </article>

      <article className={homePage.categoryBlock}>
        <CategoryBlock />
      </article>

      <article className={homePage.saleBanner}>
        <SaleBanner />
      </article>

      <article className={homePage.productList}>
        <ProductList title={'Shop now'} products={phones} />
      </article>
    </main>
  );
};
