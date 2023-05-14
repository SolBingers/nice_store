import React, { FC, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { SettingsInput } from '../../components/SettingsInput';
import { SettingsSelect } from '../../components/SettingsSelect';
import classNames from 'classnames';
import styles from './CategoryPage.module.scss';
import { List } from '../../components/List';
import { Categories } from '../../components/Categories';
import { Pagination } from '../../components/Pagination';
import { getAllPhones } from '../../api/products';
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
  const [selectedSort, setSelectedSort] = useState('newest');
  const [selectedCount, setSelectedCount] = useState('6');
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const getPhones = async () => {
    return await getAllPhones(searchParams.toString());
  };

  const { isLoading, data, refetch } = useQuery<Response>(
    'products',
    getPhones,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  useEffect(() => {
    refetch();

    const searchSort = searchParams.get('sort');
    const searchCount = searchParams.get('count');
    const searchPage = searchParams.get('page');

    setSelectedSort(searchSort || 'newest');
    setSelectedCount(searchCount || '6');
    setSelectedPage(+(searchPage || '1'));
  }, [searchParams]);

  useEffect(() => {
    const searchSort = searchParams.get('sort');
    const searchCount = searchParams.get('count');
    const searchPage = searchParams.get('page');

    if (
      searchSort !== selectedSort
      || searchCount !== selectedCount
      || searchPage !== selectedPage.toString()
    ) {
      searchParams.set('sort', selectedSort);
      searchParams.set('count', selectedCount);
      searchParams.set('page', selectedPage.toString());
      
      setSearchParams(searchParams);
    }
  }, [selectedSort, selectedCount, selectedPage]);

  useEffect(() => {
    const newMaxPages = data?.pages || 1;

    if (selectedPage > newMaxPages) {
      setSelectedPage(newMaxPages);
    }
  }, [data?.pages]);

  return (
    <>
      <BreadCrumbs />

      <main className={classNames(className, styles.main)}>

        <Categories className={styles.categoriesContainer}/>


        <div className={styles.content}>
          <p className={styles.title}>{selectedCategory}</p>

          <div className={styles.settings}>
            <SettingsInput className={styles.input} title="Product name" />

            <SettingsSelect
              className={styles.select}
              title="Sort by"
              selectedlValue={selectedSort}
              options={['newest', 'oldest', 'cheapest']}
              setSelected={setSelectedSort}
            />

            <SettingsSelect
              className={styles.select}
              title="Items per page"
              selectedlValue={selectedCount}
              options={['6', '12', '18']}
              setSelected={setSelectedCount}
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
