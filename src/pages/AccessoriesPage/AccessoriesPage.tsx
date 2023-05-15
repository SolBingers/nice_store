import React, { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SettingsInput } from '../../components/SettingsInput';
import { SettingsSelect } from '../../components/SettingsSelect';
import classNames from 'classnames';
import styles from '../CategoryPage/CategoryPage.module.scss';
import { List } from '../../components/List';
import { Categories } from '../../components/Categories';
import { Pagination } from '../../components/Pagination';
import { getAllAccessories } from '../../api/products';
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

export const AccessoriesPage: FC<Props> = ({ className }) => {
  const { selectedCategory } = useParams();
  const [, setSelectedSort] = useState('');
  const [, setSelectedItemsPerPage] = useState('');
  const [selectedPage, setSelectedPage] = useState(1);
  const { search } = useLocation();

  const getAccessories = async () => {
    return await getAllAccessories(search);
  };

  const { isLoading, data, refetch } = useQuery<Response>(
    'products',
    getAccessories,
  );

  useEffect(() => {
    refetch();
  }, [search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

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
              setSelected={setSelectedSort}
            />

            <SettingsSelect
              className={styles.select}
              title="Items per page"
              apiTitle="count"
              options={['6', '12', '18']}
              setSelected={setSelectedItemsPerPage}
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
            <Pagination
              className={styles.pagination}
              currentPage={selectedPage}
              setSelectedPage={setSelectedPage}
              maxPage={data.pages}
            />
          )}
        </div>
      </main>
    </>
  );
};