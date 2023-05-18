import React from 'react';
import styles from './OrdersPage.module.scss';
import { Order } from '../../types/Order';
import { OrderComponent } from './OrderComponent';
import { useQuery } from 'react-query';
import { getAllOrders } from '../../api/products';
import { useUser } from '@clerk/clerk-react';
import { Loader } from '../../components/Loader';

export const OrdersPage = () => {
  const { user } = useUser();
  const queryOptions = {
    refetchOnWindowFocus: false,
    retryOnMount: false,
    retry: false,
  };

  const getOrders = async () => {
    if (user?.id) {
      return await getAllOrders(user.id);
    }

    throw new Error('No user id to fetch orders');
  };

  const { data, isFetching } = useQuery<Order[]>(
    'orders',
    getOrders,
    queryOptions,
  );

  return (
    <div className={styles.main}>
      <h1 className={styles.pageTitle}>Orders</h1>
      <div className={styles.orders}>
        {isFetching && <Loader />}
        {data &&
          data.map((order) => <OrderComponent key={order.id} order={order} />)}
      </div>
    </div>
  );
};
