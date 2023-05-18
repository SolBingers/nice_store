import React from 'react';
import styles from './OrdersPage.module.scss';
import { Order } from '../../types/Order';
import { OrderComponent } from './OrderComponent';
import { useQuery } from 'react-query';
import { getAllOrders } from '../../api/products';
import { useAuth } from '@clerk/clerk-react';

export const OrdersPage = () => {
  const { userId } = useAuth();

  const getOrders = async () => {
    if (userId) {
      return await getAllOrders(userId);
    }
  };

  const { isFetching, data, refetch } = useQuery('orders', getOrders);

  console.log(data);

  const order: Order = {
    id: 123,
    userId: 'user_2Py5K0rZULRPkF7q221O1zXq12j',
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    address: 'Ukraine, Kyiv',
    price: 1500,
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.pageTitle}>Orders</h1>
      <div className={styles.orders}>
        <OrderComponent order={order} />
      </div>
    </div>
  );
};
