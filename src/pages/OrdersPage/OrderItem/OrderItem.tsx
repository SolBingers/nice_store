import React, { FC } from 'react';
import styles from './OrderItem.module.scss';
import { Product } from '../../../types/Product';

type Props = {
  product: Product;
};

export const OrderItem: FC<Props> = ({ product }) => {
  const { name, count, price } = product;

  return (
    <div className={styles.item}>
      <div className={styles.title}>{name}</div>
      <div className={styles.countAndPrice} >
        <div className={styles.count}>
          <span className={styles.dimmed}>x</span>{count}
        </div>
        <div className={styles.price}>
          <span className={styles.dimmed}>$</span>{price}
        </div>
      </div>
    </div>
  );
};
