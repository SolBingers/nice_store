import React, { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SettingsInput } from '../../components/SettingsInput';
import { SettingsSelect } from '../../components/SettingsSelect';
import classNames from 'classnames';
import styles from './CategoryPage.module.scss';
import { List } from '../../components/List';
import { Categories } from '../../components/Categories';
import { Pagination } from '../../components/Pagination';
import { getAllPhones } from '../../api/phones';
import { useQuery } from 'react-query';
import { Phone } from '../../components/types/types';
import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';

type Props = {
  className?: string;
};

type Response = {
  data: Phone[];
  pages: number;
};

export const CategoryPage: FC<Props> = ({ className }) => {
  const { selectedCategory } = useParams();
  const { search } = useLocation();

  const getPhones = async () => {
    return await getAllPhones(search);
  };

  const { isLoading, data, refetch } = useQuery<Response>(
    'products',
    getPhones,
  );

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <>
      <BreadCrumbs />

      <main className={classNames(className, styles.main)}>
        <Categories />

        <div className={styles.content}>
          <p className={styles.title}>{selectedCategory}</p>

          <div className={styles.settings}>
            <SettingsInput className={styles.input} title="Product name" />

            <SettingsSelect
              className={styles.select}
              title="Sort by"
              apiTitle="sort"
              options={['Newest', 'Oldest', 'Cheapest']}
            />

            <SettingsSelect
              className={styles.select}
              title="Items per page"
              apiTitle="count"
              options={['6', '12', '18']}
            />
          </div>

          {data && !isLoading ? (
            <List className={styles.list} products={data.data} />
          ) : (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          )}

          {data && (
            <Pagination className={styles.pagination} maxPage={data.pages} />
          )}
        </div>
      </main>
    </>
  );
};
