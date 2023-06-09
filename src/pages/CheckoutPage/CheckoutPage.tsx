import React, { FC, useContext, useEffect, useState } from 'react';
import { CartItems } from '../../components/CheckoutProducts';
import page from './CheckoutPage.module.scss';
import { CartContext } from '../../contexts/CartContext';
import { Product } from '../../types/Product';
import { FormCheckout } from '../../components/FormCheckout';
import { useNavigate } from 'react-router';
import { Order } from '../../types/Order';
import { postOrder } from '../../api/products';
import { useAuth } from '@clerk/clerk-react';

export const CheckoutPage: FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const { removeAllfromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const handleClearCart = () => {
    removeAllfromCart();
    navigate('/');
  };

  const handleSendingOrder = async (address: string) => {
    if (!userId) {
      handleClearCart();
      return;
    }

    const order: Omit<Order, 'id' | 'updatedAt' | 'createdAt'> = {
      userId,
      address,
      totalPrice: totalSum,
      products: cart,
    };

    try {
      await postOrder(order);
    } catch (err) {
      console.log(err);
    }

    handleClearCart();
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

  const totalSum: number = cart.reduce(
    (acc: number, { price, count }) => acc + Number(price) * count,
    0,
  );

  return (
    <>
      <div className={page.pageContainer}>
        <div className={page.formContainer}>
          <FormCheckout 
            onClear={handleClearCart}
            sendOrder={handleSendingOrder}
          />
        </div>

        <div className={page.orderContainer}>
          <h2 className={page.itemsTitle}>Your order</h2>

          <div className={page.itemsContainer}>
            {cart.map((product) => (
              <CartItems key={product.id} product={product} />
            ))}
          </div>
          <div className={page.totalSum}>
            <h3 className={page.totalSum__title}>TOTAL SUM:</h3>
            <p className={page.totalSum__number}>{totalSum}</p>
          </div>
        </div>
      </div>
    </>
  );
};
