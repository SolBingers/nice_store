import React, { FC } from 'react';
import styles from './OrderComponent.module.scss';
import { OrderItem } from '../OrderItem';
import { Order } from '../../../types/Order';

type Props = {
  order: Order;
};

export const OrderComponent: FC<Props> = ({ order }) => {
  const { id, address, createdAt, price, products } = order;

  const dateString = createdAt
    .toLocaleString('en-UA', {
      timeZone: 'Europe/Kiev',
      hour12: false,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

  return (
    <div className={styles.order}>
      <div className={styles.info}>
        <div className={styles.id}>
          <p>
            <span className={styles.dimmed}>Order id: </span>
            {id}
          </p>
        </div>
        <div className={styles.address}>
          <p>
            <span className={styles.dimmed}>Address: </span>
            {address}
          </p>
        </div>
        <div className={styles.date}>
          <p>
            <span className={styles.dimmed}>Date: </span> {dateString}
          </p>
        </div>
        <div className={styles.totalPrice}>
          <p>
            <span className={styles.dimmed}>Total price: </span>
            {price}
            <span className={styles.dimmed}>$</span>
          </p>
        </div>
      </div>

      <div className={styles.items}>
        {products.map((product) => (
          <OrderItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
