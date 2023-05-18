import React, { useEffect } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import classNames from 'classnames';
import { Categories } from '../../components/Categories';
import styles from '../CategoryPage/CategoryPage.module.scss';
import { useQuery } from 'react-query';
import { ProductItem } from '../../types/types';
import { List } from '../../components/List';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import { updateSearch } from '../../utils/helpers';
import additionalStyles from './SearchPage.module.scss';

type Response = {
  data: ProductItem[];
  pages: number;
};


export const SearchPage:React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || '1';

  const onPageChange = (page: string) => {
    updateSearch({ page }, searchParams, setSearchParams);
  };

  const {isFetching, data, refetch} = useQuery<Response>(
    'searchProduct');

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return (
    <>
      <BreadCrumbs />

      <main className={classNames(styles.main)}>

        <Categories className={styles.categoriesContainer}/>

        <div className={classNames(styles.content, additionalStyles.container)}>
          {data && !isFetching ? (
            <List className={styles.list} products={data.data} />
          ) : (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          )}

          {data && (
            <Pagination
              className={styles.pagination}
              currentPage={page}
              setSelectedPage={onPageChange}
              maxPage={data.pages}
            />
          )}
        </div>
      </main>
    </>
  );
};