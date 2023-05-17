import React, { FC, useEffect, useState } from 'react';
import { CartItems } from '../../components/CheckoutProducts';
import page from './CheckoutPage.module.scss';
import { Product } from '../../types/types';
import { FormCheckout } from '../../components/FormCheckout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <>
      <div className={page.pageContainer}>
        <div className={page.formContainer}>
          <FormCheckout />
        </div>

        <div className={page.orderContainer}>
          <h2 className={page.itemsTitle}>Your order</h2>

          <div className={page.itemsContainer}>
            {cart.map(product => (
              <CartItems key={product.id} product={product} />
            ))}
          </div>
          <div className={page.totalSum}>
            <h3 className={page.totalSum__title}>TOTAL SUM:</h3>
            <p className={page.totalSum__number}>{totalSum}</p>
          </div>

        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        closeButton={false}
        draggable
        pauseOnHover
      />
    </>
  );
};