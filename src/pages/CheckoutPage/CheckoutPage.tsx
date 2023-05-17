import React, { FC, useContext, useEffect, useState } from 'react';
import { CartItems } from '../../components/CheckoutProducts';
import page from './CheckoutPage.module.scss';
import { CartContext } from '../../contexts/CartContext';
import { Product } from '../../types/types';
import { FormCheckout } from '../../components/FormCheckout';
import { useNavigate } from 'react-router';

export const CheckoutPage: FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const { removeAllfromCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const handleClearCart = () => {
    removeAllfromCart();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

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
          <FormCheckout onClear={handleClearCart} />
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

        <FormCheckout />
      </div>
    </>
  );
};