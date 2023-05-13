import React, { useContext } from 'react';
import counterStyle from './CartCounter.module.scss';
import { CartContext } from '../../contexts/CartContext';

export const CartCounter: React.FC = () => {
  const { cart } = useContext(CartContext);

  let count = 0;

  cart.forEach((product) => {
    count += product.count;
  });

  return <div className={counterStyle.container}>{`${count}`}</div>;
};
