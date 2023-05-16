import React, { FC, useEffect, useState } from 'react';
import { CartItems } from '../../components/CheckoutProducts';
import page from './CheckoutPage.module.scss';
import { Product } from '../../types/types';

export const CheckoutPage: FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const getItems = () => {
      const localItems = localStorage.getItem('cart');

      if (localItems) {
        const parsedItems = JSON.parse(localItems);
        return parsedItems;
      }
    };

    setCart(getItems());
  }, []);
  
  const totalSum: number = cart.reduce((acc: number, product: any) => 
    acc + product.price * product.count, 0);

  return (
    <div className={page.pageContainer}>
      <div className={page.orderContainer}>
        <div className={page.itemsContainer}>
          {cart.map(product => (
            <CartItems key={product.id} product={product} />
          ))}
        </div>
        <div className={page.totalSum}>
          <h3 className={page.totalSum__title}>TOTAL SUM:</h3>
          <p className={page.totalSum__sum}>{totalSum}</p>
        </div>
      </div>
    </div>
  );
};